import { hash } from 'bcryptjs';
import { prisma } from '../../lib/prisma';

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterUseCase {
  // eslint-disable-next-line
  constructor(private usersRepository: any) {
    this.usersRepository = usersRepository;
  }
  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const userAlreadyExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const password_hash = await hash(password, 6);

    await this.usersRepository.create({
      name,
      email,
      password: password_hash,
    });
  }
}
