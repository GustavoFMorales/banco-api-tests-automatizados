const mocha = require("mocha");
const { expect } = require("chai");
const request = require("supertest");

describe("Transferências", () => {
  describe("POST /transferencias", () => {
    it("Deve retornar 201 quando a transferência for acima de R$10,00", async () => {
      // Capturando o token de autenticação
      const respostaLogin = await request("http://localhost:3000")
        .post("/login") // Substitua pela URL correta do seu servidor
        .set("Content-Type", "application/json") // Define o cabeçalho Content-Type
        .send({
          username: "gustavo",
          senha: "123456",
        });
      expect(respostaLogin.status).to.equal(200);
      expect(respostaLogin.body.token).to.be.a("string");
      const token = respostaLogin.body.token;

      const resposta = await request("http://localhost:3000")
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
        const respostaLogin = await request("http://localhost:3000")
        .post("/login") // Substitua pela URL correta do seu servidor
        .set("Content-Type", "application/json") // Define o cabeçalho Content-Type
        .send({
          username: "gustavo",
          senha: "123456",
        });
      expect(respostaLogin.status).to.equal(200);
      expect(respostaLogin.body.token).to.be.a("string");
      const token = respostaLogin.body.token;

      const resposta = await request("http://localhost:3000")
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
