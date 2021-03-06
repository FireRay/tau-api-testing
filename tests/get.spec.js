

const app = require('../app/src/app1');
const request = require('supertest');
const expect = require('chai').expect;

describe('get request', () => {

  it('get course id', () => {
    request(app)
      .get('/course/1')
      .end((err, res) => {
        expect(res.body.id).to.be.equal('1');
      });
  });
  // localhost:// course
  it('get query param name', (done) => {
    request(app)
      .get('/course')
      .query({ 'name': 'mocha' })
      .expect(200, { id: '1', name: 'mocha' }, done);
  })
});