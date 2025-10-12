import { Request, Response } from 'express';
import { findManyUsersUseCase } from '../../../use-cases/users/find-many';
import { PrismaUsersRepository } from '../../../../repositories/prisma';

export async function findMany(req: Request, res: Response) {
  try {
    const prismaUsersRepository = new PrismaUsersRepository();
    const findManyUseCase = new findManyUsersUseCase(prismaUsersRepository);
    const users = await findManyUseCase.execute();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error);
  }
}
