import { Column } from './column.model';

export interface ProjectBoard {
  name: string;
  columns: Column[];
}
