import { Router } from 'express';

const index = Router();

index.get('/', (req, res) => {
  return res.json({ message: 'API NodeJS with Express & TypeScript.' });
});

export default index;
