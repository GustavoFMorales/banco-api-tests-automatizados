const mocha = require("mocha");
const { expect } = require("chai");
const request = require("supertest");
require("dotenv").config();
const autenticacao = require("../helpers/autenticacao");
const postTransferencia = require("../fixtures/postTransferencia.json");

describe("Transferências", () => {
  describe("POST /transferencias", () => {
    let token;
    beforeEach(async () => {
      token = await autenticacao.obterToken();
    });
    it("Deve retornar 201 quando a transferência for acima de R$10,00", async () => {
      // Capturando o token de autenticação
      const bodyTransferencia = { ...postTransferencia }; // Usando o fixture para o corpo da transferência
      const resposta = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`) // Adiciona o token no cabeçalho Authorization
        .send(bodyTransferencia); // Usando o corpo da transferência do fixture
      expect(resposta.status).to.equal(201);
      console.log(resposta.body);
    });

    it("Deve retornar 422 quando a transferência for abaixo de R$10,00", async () => {
      const bodyTransferencia = { ...postTransferencia, valor: 9.99 }; // Modificando o valor para abaixo de R$10,00
      const resposta = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`) // Adiciona o token no cabeçalho Authorization
        .send(bodyTransferencia); // Usando o corpo da transferência do fixture
      expect(resposta.status).to.equal(422);
      console.log(resposta.body);
    });
  });
});
