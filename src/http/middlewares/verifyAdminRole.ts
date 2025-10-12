import { Request, Response } from 'express';

interface UserRoles {
  ADMIN: 'ADMIN';
}

export function verifyUserRole(roleToVerify: UserRoles) {
  return async (req: Request, res: Response, role: UserRoles) => {
    if (role !== roleToVerify) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
  };
}
