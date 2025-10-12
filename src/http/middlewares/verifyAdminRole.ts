import { Request, Response, NextFunction } from 'express';
import { extractToken } from '../../utils/extract-token';
import { InvalidCredentialsError } from '../../use-cases/errors/invalid-credentials';

export async function verifyAdminRole(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const tokenExtracted = extractToken(req);

    if (!tokenExtracted.role || tokenExtracted.role !== 'ADMIN') {
      throw new InvalidCredentialsError();
    }

    req.user = { id: tokenExtracted.id, role: tokenExtracted.role };

    return next();
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return res.status(401).send({ message: error.message });
    }
    return res.status(500).send();
  }
}
