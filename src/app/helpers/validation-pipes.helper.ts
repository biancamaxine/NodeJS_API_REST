import { validate } from 'class-validator';

import { BadRequestExeption } from './http-exeption.helper';

export async function validationPipes(transformedObject: object) {
  const validation = await validate(transformedObject, {
    whitelist: true,
    forbidNonWhitelisted: true,
  }).then(errors => {
    const list: string[] = [];
    errors.forEach(err => {
      const key = Object.keys(err.constraints)[0];
      list.push(err.constraints[key]);
    });
    return list;
  });

  if (validation.length > 0) {
    throw new BadRequestExeption(validation);
  }
  else return transformedObject;
}
