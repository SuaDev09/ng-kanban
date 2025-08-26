import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProjectBoard } from '@app/core/models/project-board.model';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  providers: [DynamicDialogRef, DynamicDialogConfig],
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.css',
})
export class NewProjectComponent {
  private readonly _dialogRef = inject(DynamicDialogRef);
  private readonly _dialogConfig = inject(DynamicDialogConfig);

  projectForm!: FormGroup;
  data!: ProjectBoard;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.projectForm = this.fb.nonNullable.group({
      name: this.fb.control(this.data.name || '', {
        validators: [Validators.required],
      }),
      columns: this.fb.array([
        this.fb.nonNullable.group({
          name: ['Todo', Validators.required],
          tasks: [[]],
        }),
        this.fb.nonNullable.group({
          name: ['Doing', Validators.required],
          tasks: [[]],
        }),
      ]),
    });

    if (this.data.columns?.length > 0) {
      this.columnArray.clear();
      this.data.columns.forEach((column) => this.addColumn(column.name));
    }
  }

  get columnArray() {
    return this.projectForm.get('columns') as FormArray;
  }

  addColumn(name: string = ''): void {
    const group = this.fb.nonNullable.group({
      name: [name, Validators.required],
      boardItems: [[]],
    });
    this.columnArray.push(group);
  }

  removeColumn(index: number): void {
    this.columnArray.removeAt(index);
  }

  submit() {
    const editMode = !!this.data.name;

    if (editMode) {
      const updatedBoard: ProjectBoard = {
        ...this.data,
        name: this.projectForm.value.name,
        columns: this.projectForm.value.columns.map(
          (column: { name: string }, index: number) => ({
            name: column.name,
            tasks: this.data.columns[index]?.boardItems || [],
          })
        ),
      };

      this._dialogRef.close({ ...updatedBoard });
    }

    if (!editMode) {
      this._dialogRef.close({ ...this.projectForm.value });
    }
  }

  onSubmit() {}

  onCancel() {}
}
