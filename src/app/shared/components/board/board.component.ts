import { Component, ViewEncapsulation } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { CommonModule, NgFor } from '@angular/common';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    CdkDropList,
    CdkDrag,
    PanelModule,
    CardModule,
    TagModule,
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  boardItems: any[] = [
    {
      columnName: 'To Do',
      items: [
        {
          title: 'Get To Work',
          priority: 'XL',
          effort: 'XL',
        },
        {
          title: 'Get to work 2 ',
          priority: 'M',
          effort: 'S',
        },
      ],
    },
    {
      columnName: 'Doing',
      items: [
        {
          title: 'Get To Work',
          priority: 'XL',
          effort: 'XL',
        },
        {
          title:
            'This list has the List Limits Power-up enabled, to help the team prioritize and remove bottlenecks before picking up new work. The list will be highlighted if the number of cards in it passes the limit that the team determines based on team size.',
          priority: 'M',
          effort: 'S',
        },
        {
          title:
            'This list has the List Limits Power-up enabled, to help the team prioritize and remove bottlenecks before picking up new work. The list will be highlighted if the number of cards in it passes the limit that the team determines based on team size.',
          priority: 'M',
          effort: 'S',
        },
        {
          title:
            'This list has the List Limits Power-up enabled, to help the team prioritize and remove bottlenecks before picking up new work. The list will be highlighted if the number of cards in it passes the limit that the team determines based on team size.',
          priority: 'M',
          effort: 'S',
        },
        {
          title:
            'This list has the List Limits Power-up enabled, to help the team prioritize and remove bottlenecks before picking up new work. The list will be highlighted if the number of cards in it passes the limit that the team determines based on team size.',
          priority: 'M',
          effort: 'S',
        },
      ],
    },
    {
      columnName: 'Done',
      items: [
        {
          title: 'Get To Work',
          priority: 'XL',
          effort: 'XL',
        },
        {
          title: 'Get to work 2 ',
          priority: 'M',
          effort: 'S',
        },
      ],
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // Reorder items within the same container
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Transfer items between different containers
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    // Log the updated data for debugging
    console.log('Updated boardItems:', this.boardItems);
  }

  getConnnectedColumns(columnName: string) {
    return this.boardItems
      .filter((column) => column.columnName !== columnName)
      .map((column) => column.columnName); // Return only the column names
  }
  itemClick() {
    console.log('item was clicked');
  }
}
