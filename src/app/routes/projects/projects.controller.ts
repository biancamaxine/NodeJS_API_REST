import { Request, Response } from 'express';

import { service } from './projects.service';

export const POST = async(req: Request, res: Response) => {
  const message = await service.create(req.body);
  return res.status(201).json({ message });
}

export const GET = async (req: Request, res: Response) => {
  const projects = await service.read(req.params.id, req.query);
  return res.json(projects);
}

export const PATCH = async (req: Request, res: Response) => {
  const message = await service.update(req.params.id, req.body);
  return res.json({ message });
}

export const DELETE = async (req: Request, res: Response) => {
  const message = await service.delete(req.params.id);
  return res.json({ message });
}
