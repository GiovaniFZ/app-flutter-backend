import express from 'express';
import { appRoutes } from './http/routes';
import cors from 'cors';

export const app = express();
app.use(express.json());
app.use(cors());
appRoutes(app);
