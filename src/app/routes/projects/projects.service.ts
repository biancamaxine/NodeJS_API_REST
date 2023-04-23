import { plainToInstance } from 'class-transformer';

import { BadRequestExeption, NotFoundExeption } from '../../helpers/http-exeption.helper';
import { Project } from '../../models/project.model';
import { ProjectCreateDto } from './dto/project-create.dto';
import { ProjectUpdateDto } from './dto/project-update.dto';
import { isValidObjectId } from 'mongoose';

export const service = {

  create: async (body: unknown) => {
    const projectCreateDto = plainToInstance(ProjectCreateDto, body);

    await Project.create({
      ...projectCreateDto,
      created_at: Date.now(),
    });
    return 'Project created successfully.';
  },

  read: async (id?: string, query?: { title?: string }) => {
    if (id) {
      const project = await Project.findById(id)
        .catch(err => {
          if (!isValidObjectId(id)) throw new BadRequestExeption('Invalid specified id.');
        });

      if (!project) throw new NotFoundExeption('Project not found.');
      console.log(project);
      return project;
    }
    const projects = await Project.find();
    if (query) {
      if (query.title)
        return projects.filter(project => project.title.includes(query.title));
    }
    return projects;
  },

  update: async (id: string, body: unknown) => {
    const project = await Project.findById(id);

    if (!project) throw new NotFoundExeption('Project not found.');

    const projectUpdateDto = plainToInstance(ProjectUpdateDto, body);
    if(projectUpdateDto.title) project.title = projectUpdateDto.title;
    if(projectUpdateDto.description) project.description = projectUpdateDto.description;

    await project.save();
    return 'Project updated successfully.';
  },

  delete: async (id: string) => {
    const project = await Project.findById(id);

    if (!project) throw new NotFoundExeption('Project not found.');

    await Project.deleteOne({ _id: id });

    return 'Project deleted successfully.';
  }

}
