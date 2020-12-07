

const app = require('..src/app.js');
const request = require('supertest');
const expect = require('chai').expect;

describe('get requests', () => {
  request(app)
    .get('/course1/')
    .end((err, res) => {
      expect(res.body.id).to.be.eqaul('1');
    });
});