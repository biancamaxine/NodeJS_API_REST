import { Router } from 'express';

import validationPipesMiddleware from '../../middlewares/validation-pipes.middleware';
import { ProjectCreateDto } from './dto/project-create.dto';
import { ProjectUpdateDto } from './dto/project-update.dto';
import * as controller from './projects.controller';

const projects = Router();

projects.post('/', validationPipesMiddleware(ProjectCreateDto), controller.POST);
projects.get(['/', '/:id'], controller.GET);
projects.patch('/:id', validationPipesMiddleware(ProjectUpdateDto), controller.PATCH);
projects.delete('/:id', controller.DELETE);

export default projects;
