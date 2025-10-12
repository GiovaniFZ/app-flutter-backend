import { PrismaUsersRepository } from '../../../repositories/prisma';
import { RegisterUseCase } from '../users/register';

export function makeRegisterUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository();
  const registerUseCase = new RegisterUseCase(prismaUsersRepository);
  return registerUseCase;
}
