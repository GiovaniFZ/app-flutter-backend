import { findMany } from './controllers/get-users';
import { register } from './controllers/register';
import type { Express } from 'express';

export async function appRoutes(app: Express) {
  app.post('/user', register);
  app.get('/user', findMany);
}
