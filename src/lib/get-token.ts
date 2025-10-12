import jsonwebtoken from 'jsonwebtoken';
import { env } from '../../schemas/env';
import { User } from '../generated/prisma';

interface IConfigureJWT {
  user: User;
}

const jwt_key = env.JWT_SECRET;

export function getToken({ user }: IConfigureJWT) {
  const token = jsonwebtoken.sign({ id: user.id, role: user.role }, jwt_key, {
    expiresIn: 1000 * 60 * 60 * 24 * 1, // 1 day
  });
  return token;
}
