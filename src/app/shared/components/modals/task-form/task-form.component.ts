import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
    ReactiveFormsModule,
    ButtonModule,
    CheckboxModule,
    EditorModule,
    InputTextModule,
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  form!: FormGroup;

  get subtasks(): FormArray {
    return this.form.get('subtasks') as FormArray;
  }

  text!: string;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      subtasks: this.fb.array([
        this.createSubtask('Task 1', false),
        this.createSubtask('Task 2', false),
        this.createSubtask('Task 3', true),
      ]),
      text: [''],
    });
  }

  createSubtask(task: string = '', completed: boolean = false) {
    return this.fb.group({
      task: [task, Validators.required],
      completed: [completed],
    });
  }

  addSubtask() {
    this.subtasks.push(this.createSubtask());
  }

  removeSubtask(index: number) {
    this.subtasks.removeAt(index);
  }
}
