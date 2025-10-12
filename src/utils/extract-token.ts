import { Request } from 'express';
import { InvalidCredentialsError } from '../use-cases/errors/invalid-credentials';
import { decodeToken, DecodedToken } from './decode-token';

export function extractToken(req: Request): DecodedToken {
  const authorizationHeader =
    req.headers.authorization || req.get('authorization');
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    throw new InvalidCredentialsError();
  }
  const token = authorizationHeader.split(' ')[1];
  const decodedToken = decodeToken(token);
  return decodedToken;
}
