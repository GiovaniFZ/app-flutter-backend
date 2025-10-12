import type { Express } from 'express';
import { register } from './controllers/users/register';
import { findMany } from './controllers/users/find-many';
import { authenticate } from './controllers/users/authenticate';

export async function appRoutes(app: Express) {
  app.post('/user', register);
  app.get('/user', findMany);
  app.post('/session', authenticate);
}
