import type { Express } from 'express';
import { register } from './controllers/register';
import { findMany } from './controllers/find-many-users';

export async function appRoutes(app: Express) {
  app.post('/user', register);
  app.get('/user', findMany);
}
