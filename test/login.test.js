const mocha = require('mocha');
const {expect} = require('chai');
const request = require('supertest');
require('dotenv').config();


describe('Login', () => {
    describe('POST /login',() => {
        it('Deve retornar 200 com token em string quando usa credenciais válidas', async () => {
            const resposta = await request(process.env.BASE_URL)
              .post('/login') // Substitua pela URL correta do seu servidor
              .set('Content-Type', 'application/json') // Define o cabeçalho Content-Type
              .send({
                        'username': 'gustavo',
                        'senha': '123456'
              })
              expect(resposta.status).to.equal(200);
              expect(resposta.body.token).to.be.a('string');
              
        })
    })
});