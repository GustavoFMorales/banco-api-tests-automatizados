const mocha = require("mocha");
const { expect } = require("chai");
const request = require("supertest");
require("dotenv").config();
const autenticacao = require("../helpers/autenticacao");

describe("Transferências", () => {
  describe("POST /transferencias", () => {
    let token;
    beforeEach(async () => {
       token = await autenticacao.obterToken();
    });
    it("Deve retornar 201 quando a transferência for acima de R$10,00", async () => {
      // Capturando o token de autenticação
      const resposta = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`) // Adiciona o token no cabeçalho Authorization
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 10.0,
          token: "",
        });
      expect(resposta.status).to.equal(201);
      console.log(resposta.body);
    });

    it("Deve retornar 422 quando a transferência for abaixo de R$10,00", async () => {
      // Capturando o token de autenticação
      const resposta = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`) // Adiciona o token no cabeçalho Authorization
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 9.99,
          token: "",
        });
      expect(resposta.status).to.equal(422);
      console.log(resposta.body);
    });
  });
});
