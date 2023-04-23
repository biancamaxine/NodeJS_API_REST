import { Router } from 'express';
import * as controller from './projects.controller';

const projects = Router();

projects.post('/', controller.POST);
projects.get('/', controller.GET);
projects.patch('/', controller.PATCH);
projects.delete('/', controller.DELETE);

export default projects;
