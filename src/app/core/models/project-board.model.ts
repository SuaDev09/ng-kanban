import { Column } from './column.model';
import Project from './project.model';

export interface ProjectBoard extends Project {
  columns: Column[];
}
