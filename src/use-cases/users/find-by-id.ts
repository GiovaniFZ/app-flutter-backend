import { UsersRepository } from '../../../repositories/users-repository';
import { User } from '../../generated/prisma';
import { ResourceNotFoundError } from '../errors/resource-not-found';

interface FindUserByIdRequest {
  userId: string;
}

interface FindUserByIdResponse {
  user: User;
}

export class FindUserByIdUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute({
    userId,
  }: FindUserByIdRequest): Promise<FindUserByIdResponse> {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new ResourceNotFoundError();
    }
    return { user };
  }
}
