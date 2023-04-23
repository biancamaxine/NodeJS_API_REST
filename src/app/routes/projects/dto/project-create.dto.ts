import { IsString } from 'class-validator';

export class ProjectCreateDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
