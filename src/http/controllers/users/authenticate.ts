import { z } from 'zod';
import { InvalidCredentialsError } from '../../../use-cases/errors/invalid-credentials';
import { Request, Response } from 'express';
import { makeAuthenticateUseCase } from '../../../use-cases/factories/make-authenticate-use-case';

export async function authenticate(req: Request, res: Response) {
  const authenticateBodySchema = z.object({
    email: z.email(),
    password: z.string().min(6),
  });

  const { email, password } = authenticateBodySchema.parse(req.body);

  try {
    const authenticateUseCase = makeAuthenticateUseCase();
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
