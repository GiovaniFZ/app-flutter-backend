import type { Express } from 'express';
import { register } from './controllers/users/register';
import { findMany } from './controllers/users/find-many';

export async function appRoutes(app: Express) {
  app.post('/user', register);
  app.get('/user', findMany);
}
