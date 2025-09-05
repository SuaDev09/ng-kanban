import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { EditorModule } from 'primeng/editor';
@Component({
  selector: 'app-view-task',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, CheckboxModule, EditorModule],
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.css',
})
export class ViewTaskComponent {
  subtasks: {
    task: string;
    completed: boolean;
  }[] = [
    {
      task: 'Task 1',
      completed: false,
    },
    {
      task: 'Task 2',
      completed: false,
    },
    {
      task: 'Task 3',
      completed: true,
    },
    {
      task: 'Task 4',
      completed: false,
    },
    {
      task: 'Task 5',
      completed: true,
    },
  ];


  text!: string;
}
