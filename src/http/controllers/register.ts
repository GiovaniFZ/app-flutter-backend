import z from 'zod';
import { prisma } from '../../lib/prisma';
import { Request, Response } from 'express';

export async function register(req: Request, res: Response) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(6),
  });

  const { name, email, password } = registerBodySchema.parse(req.body);
  await prisma.user.create({
    data: { name, email, password },
  });

  return res.status(201).send();
}
