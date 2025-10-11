import z from 'zod';
import { Request, Response } from 'express';
import { RegisterUseCase } from '../../use-cases/users/register';
import { PrismaUsersRepository } from '../../../repositories/prisma';

export async function register(req: Request, res: Response) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(6),
  });

  const { name, email, password } = registerBodySchema.parse(req.body);

  try {
    const prismaUsersRepository = new PrismaUsersRepository();
    const registerUseCase = new RegisterUseCase(prismaUsersRepository);
    await registerUseCase.execute({ name, email, password });
    return res.status(201).send();
  } catch (error) {
    return res.status(409).json({ message: (error as Error).message });
  }
}
