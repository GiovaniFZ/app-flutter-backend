import { Prisma, User } from '../src/generated/prisma';

export interface UsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findMany(): Promise<User[]>;
}
