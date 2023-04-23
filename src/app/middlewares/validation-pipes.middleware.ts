import { plainToInstance } from 'class-transformer';
import { NextFunction, Request, Response } from 'express';

import { validationPipes } from '../helpers/validation-pipes.helper';

const validationPipesMiddleware = (schema: new () => {}) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const transformedObject = plainToInstance(schema, req.body);

  await validationPipes(transformedObject);

  return next();
}

export default validationPipesMiddleware;
