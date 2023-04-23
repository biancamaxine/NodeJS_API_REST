import { NextFunction, Request, Response } from 'express';

import { HttpExeption } from '../helpers/http-exeption.helper';

export default function httpExeptionMiddleware(
  err: Error & HttpExeption,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err.statusCode ?? 500;
  const message = err.statusCode ? err.message : 'Internal server error.'

  return res.status(statusCode).json({ message });
}
