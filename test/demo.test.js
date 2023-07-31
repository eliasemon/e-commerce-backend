/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/app');

describe('Get /api/v1/demo', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/api/v1/demo');
    expect(response.status).toBe(200);
  });
});

describe('Post /api/v1/demo', () => {
  it('should return 201 OK', async () => {
    const response = await request(app)
      .post('/api/v1/demo')
      .send({
        data: {
          name: 'test',
        },
      })
      .set('Accept', 'application/json');
    expect(response.status).toBe(201);
    expect(response.body.data.name).toBe('test');
  });
  it('should return 400 Bad Request', async () => {
    const response = await request(app).post('/api/v1/demo');
    expect(response.status).toBe(400);
  });
});
