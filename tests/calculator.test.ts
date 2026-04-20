import request from 'supertest';
import app from '../src/app';

describe('Calculator API Endpoints', () => {
  
  test('GET /sum should add two numbers', async () => {
    const res = await request(app).get('/sum?a=10&b=5');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(15);
    expect(res.body.operation).toBe('sum');
  });

  test('GET /sub should subtract two numbers', async () => {
    const res = await request(app).get('/sub?a=10&b=5');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(5);
    expect(res.body.operation).toBe('sub');
  });

  test('GET /mult should multiply two numbers', async () => {
    const res = await request(app).get('/mult?a=10&b=5');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(50);
    expect(res.body.operation).toBe('mult');
  });

  test('GET /div should divide two numbers', async () => {
    const res = await request(app).get('/div?a=10&b=2');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(5);
    expect(res.body.operation).toBe('div');
  });

  test('GET /div by zero should return 400', async () => {
    const res = await request(app).get('/div?a=10&b=0');
    expect(res.status).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  test('GET /sum with invalid parameters should return 400', async () => {
    const res = await request(app).get('/sum?a=abc&b=5');
    expect(res.status).toBe(400);
  });

  test('GET /health should return UP', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('UP');
  });

});
