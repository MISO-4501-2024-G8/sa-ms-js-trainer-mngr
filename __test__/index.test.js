const supertest = require('supertest');
const app = require('../src/index');

describe('health check', () => {
  let request;
  let server;
  beforeAll((done) => {
    server = app.listen(done);
    request = supertest(server);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should return ok 200', async () => {
    await request.get('/').then((response) => {
      expect(response.status).toBe(200);
    });
  });


});
