import z from 'zod';
import { Request, Response } from 'express';
import { UserAlreadyExistsError } from '../../../use-cases/errors/user-already-exists';
import { makeRegisterUseCase } from '../../../use-cases/factories/make-register-use-case';

export async function register(req: Request, res: Response) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(6),
  });

  const { name, email, password } = registerBodySchema.parse(req.body);

  try {
    const registerUseCase = makeRegisterUseCase();
    await registerUseCase.execute({ name, email, password });
    return res.status(201).send();
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return res.status(409).json({ message: error.message });
    }
    return res.status(500).send();
  }
}
