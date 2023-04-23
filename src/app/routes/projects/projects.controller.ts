import { Request, Response } from 'express'

export const POST = (req: Request, res: Response) => {
  return res.json({ message: 'this is a POST request.' });
}

export const GET = (req: Request, res: Response) => {
  return res.json({ message: 'this is a GET request.' });
}

export const PATCH = (req: Request, res: Response) => {
  return res.json({ message: 'this is a PATCH request.' });
}

export const DELETE = (req: Request, res: Response) => {
  return res.json({ message: 'this is a DELETE request.' });
}
