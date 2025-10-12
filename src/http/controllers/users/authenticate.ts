import { z } from 'zod';
import { InvalidCredentialsError } from '../../../use-cases/errors/invalid-credentials';
import { PrismaUsersRepository } from '../../../../repositories/prisma';
import { AuthenticateUseCase } from '../../../use-cases/users/authenticate';
import { Request, Response } from 'express';

export async function authenticate(req: Request, res: Response) {
  const authenticateBodySchema = z.object({
    email: z.email(),
    password: z.string().min(6),
  });

  const { email, password } = authenticateBodySchema.parse(req.body);

  try {
    const prismaUsersRepository = new PrismaUsersRepository();
    const authenticateUseCase = new AuthenticateUseCase(prismaUsersRepository);
    await authenticateUseCase.execute({
      email,
      password,
    });
  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return res.status(400).send({ message: err.message });
    }
    throw err;
  }

  return res.status(200).send();
}
