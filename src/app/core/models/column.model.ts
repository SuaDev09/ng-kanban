import { BoardItem } from './board-item.model';

export interface Column {
  name: string;
  boardItems: BoardItem[];
}
