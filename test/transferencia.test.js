const mocha = require("mocha");
const { expect } = require("chai");
const request = require("supertest");
require("dotenv").config();
const autenticacao = require("../helpers/autenticacao");
const postTransferencia = require("../fixtures/postTransferencia.json");

describe("Transferências", () => {
  let token;
  beforeEach(async () => {
    token = await autenticacao.obterToken();
  });
  describe("POST /transferencias", () => {
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
  describe("GET /transferencias/{id}", () => {
    it("Deve retornar sucesso com 200 e dados iguais ao registro de transferencia de acordo com o bando de dados ", async () => {
      const resposta = await request(process.env.BASE_URL)
        .get("/transferencias/15")
        .set("Authorization", `Bearer ${token}`);

      expect(resposta.status).to.equal(200); // Verifica se o status é 200
      expect(resposta.body.id).to.equal(15); // Verifica se o ID da transferência é 15
      expect(resposta.body.id).to.be.a("number"); // Verifica se o ID é um número
      expect(resposta.body.conta_origem_id).to.equal(1); // Verifica se a conta de origem é 1
      expect(resposta.body.conta_destino_id).to.equal(2);
      expect(resposta.body.valor).to.equal("500.00"); // Verifica se o valor é 500.00
    });
  });
  describe("GET /transferencias", () => {
    it("Deve retonar 10 elementos na paginação quando informar limite de 10 registro", async () => {
      const resposta = await request(process.env.BASE_URL)
        .get("/transferencias?page=1&limit=10")
        .set("Authorization", `Bearer ${token}`);

        expect(resposta.status).to.equal(200);
        expect(resposta.body.limit).to.equal(10);
        expect(resposta.body.transferencias).to.have.lengthOf(10);

    });
  });
});
