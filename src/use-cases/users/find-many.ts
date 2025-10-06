import { prisma } from '../../lib/prisma';

export async function findManyUsersUseCase() {
  const users = await prisma.user.findMany();
  return users;
}
