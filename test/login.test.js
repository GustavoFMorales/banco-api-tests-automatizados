const mocha = require("mocha");
const { expect } = require("chai");
const request = require("supertest");
require("dotenv").config();
const postLogin = require("../fixtures/postLogin.json");

describe("Login", () => {
  describe("POST /login", () => {
    it("Deve retornar 200 com token em string quando usa credenciais válidas", async () => {
      const bodyLogin = { ...postLogin };
      const resposta = await request(process.env.BASE_URL)
        .post("/login") // Substitua pela URL correta do seu servidor
        .set("Content-Type", "application/json") // Define o cabeçalho Content-Type
        .send(bodyLogin); // Envia o corpo da requisição com as credenciais de login
      expect(resposta.status).to.equal(200);
      expect(resposta.body.token).to.be.a("string");
    });
  });
  describe("POST /login", () => {
    it("Deve retornar 400 quando a senha do login estiver ausente", async () => {
      const bodyLogin = { ...postLogin, senha: "" };
      const resposta = await request(process.env.BASE_URL)
        .post("/login") // Substitua pela URL correta do seu servidor
        .set("Content-type", "application/json")
        .send(bodyLogin);

      // Validações
      expect(resposta.status).to.equal(400);
      expect(resposta.body).to.have.property("error"); // Verifica se a resposta contém a propriedade 'error'
    });
  });

  describe("POST /login", () => {
    it("Deve retornar 400 quando o usuário do login estiver ausente", async () => {
      const bodyLogin = { ...postLogin, username: "" };
      const resposta = await request(process.env.BASE_URL)
        .post("/login")
        .set("Content-type", "application/json")
        .send(bodyLogin);

      //Validações
      expect(resposta.status).to.equal(400);
      expect(resposta.body).to.have.property("error");
    });
  });

  describe("POST /login", () => {
    it("Deve retornar 401 quando as credenciais forem inválidas", async () => {
      const bodyLogin = { ...postLogin, senha: "senhaInvalida" };
      const resposta = await request(process.env.BASE_URL)
        .post("/login")
        .set("Content-type", "application/json")
        .send(bodyLogin);

      //Validações
      expect(resposta.status).to.equal(401);
      expect(resposta.body).to.have.property("error");
    });
  });
  describe("POST / login", () => {
    it("Deve retornar 401 quando o username for inválido", async () => {
        const bodyLogin = {...postLogin, username: "usurioInválido"};
        const resposta = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-type', 'application/json')
        .send(bodyLogin);

        //Validações
        expect(resposta.status).to.equal(401);
        expect(resposta.body).to.have.property("error");
    }) 
  })

   describe("POST / login", () => {
    it("Deve retornar 405 quando o método não é permitido", async () => {
        const bodyLogin = {...postLogin, username: "usurioInválido"};
        const resposta = await request(process.env.BASE_URL)
        .get('/login')
        .set('Content-type', 'application/json')
        .send(bodyLogin);

        //Validações
        expect(resposta.status).to.equal(405);
        expect(resposta.body).to.have.property("error");
    }) 
  })
   describe('POST /login', () => {
    it('Deve retornar 500 quando houver um erro interno do servidor', async () => {
        const bodyLogin = {...postLogin};
        const resposta = await request(process.env.BASE_URL)
        .post('/login')
        .set("Content-type", "application/json")
        .send(bodyLogin);

        //Validções
        expect(resposta.status).to.equal(500);
        expect(resposta.body).to.have.property("error");
    })
   })
});