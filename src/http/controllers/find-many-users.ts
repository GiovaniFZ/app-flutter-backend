import { Request, Response } from 'express';
import { findManyUsersUseCase } from '../../use-cases/users/find-many';

export async function findMany(req: Request, res: Response) {
  const users = await findManyUsersUseCase();
  return res.status(200).json(users);
}
