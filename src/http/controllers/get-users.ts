import { prisma } from '../../lib/prisma';
import { Request, Response } from 'express';

export async function findMany(req: Request, res: Response) {
  const users = await prisma.user.findMany();
  return res.status(200).json(users);
}
