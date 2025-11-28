const mocha = require('mocha');
const {expect} = require('chai');
const request = require('supertest');
require('dotenv').config();

const obterToken = async () => {
    const responseLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
            'username': 'gustavo',
            'senha': '123456'
        })

        const token = responseLogin.body.token;
        return token;
        
}

module.exports = {
    obterToken
};

