import jwt from 'jsonwebtoken';
import { env } from '../../schemas/env';

export interface DecodedToken {
  id: string;
  role?: string;
  iat?: number;
  exp?: number;
}

export function decodeToken(token: string): DecodedToken {
  const secret = env.JWT_SECRET;
  const decoded = jwt.verify(token, secret) as DecodedToken;
  return decoded;
}
