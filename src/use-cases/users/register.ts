import { hash } from 'bcryptjs';
import { UserAlreadyExistsError } from '../errors/user-already-exists';
import { UsersRepository } from '../../../repositories/users-repository';

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new UserAlreadyExistsError();
    }

    const password_hash = await hash(password, 6);

    await this.usersRepository.create({
      name,
      email,
      password: password_hash,
    });
  }
}
