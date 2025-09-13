import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    EditorModule,
    InputTextModule,
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
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
