import { BoardItem } from './board-item.model';

export interface Column {
  columnName: string;
  boardItems: BoardItem[];
}
