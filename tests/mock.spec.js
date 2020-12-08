const nock = require('nock');
const request = require('supertest');
const expect = require('chai').expect;

describe('mock response', () => {
  beforeEach(() => {
    nock('http://localhost:4000')
      .get('/users')
      .reply(200, 'user 1')
  });

  it('nock intercepts', () => {
    request('http://localhost:4000')
      .get('/users')
      .end((err, res) => {
        expect(res.text).to.contain('1');
      })
  });
});
