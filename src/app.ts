import express from 'express';
import z from 'zod';
import { prisma } from './lib/prisma';

export const app = express();
app.use(express.json());

const registerBodySchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string().min(6),
});

app.post('/user', async (req, res) => {
  const { name, email, password } = registerBodySchema.parse(req.body);
  await prisma.user.create({
    data: { name, email, password },
  });
  return res.status(201).send();
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  return res.status(200).json(users);
});
