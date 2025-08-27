import { CommonModule, NgIf } from '@angular/common';
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
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MessageModule } from 'primeng/message';
import { ProjectsService } from '@app/shared/services/projects/projects.service';
import { Column } from '@app/core/models/column.model';
import getAbbreviation from '@shared/helpers/get-abbreviation.helper';

@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    MessageModule,
  ],
  providers: [DynamicDialogConfig],
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.css',
})
export class NewProjectComponent {
  private readonly _dialogRef = inject(DynamicDialogRef);
  private readonly _dialogConfig = inject(DynamicDialogConfig);
  private readonly _projectsService = inject(ProjectsService);

  projectForm!: FormGroup; // Initialize the form group
  data!: ProjectBoard;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  buildForm() {
    this.projectForm = this.fb.nonNullable.group({
      name: this.fb.control(this.data?.name || '', {
        validators: [Validators.required],
      }),
      columns: this.fb.array([
        this.fb.nonNullable.group({
          columnName: ['Todo', Validators.required],
          boardItems: [[]],
        }),
        this.fb.nonNullable.group({
          columnName: ['Doing', Validators.required],
          boardItems: [[]],
        }),
        this.fb.nonNullable.group({
          columnName: ['Done', Validators.required],
          boardItems: [[]],
        }),
      ]),
    });

    if (this.data?.columns?.length > 0) {
      this.columnArray.clear();
      this.data.columns.forEach((column) => this.addColumn(column.columnName));
    }
  }

  get columnArray() {
    return this.projectForm.get('columns') as FormArray;
  }

  addColumn(name: string = ''): void {
    const group = this.fb.nonNullable.group({
      columnName: [name, Validators.required],
      boardItems: [[]],
    });
    this.columnArray.push(group);
  }

  removeColumn(index: number): void {
    this.columnArray.removeAt(index);
  }

  async onSubmit() {
    const editMode = true;

    if (editMode) {
      const updatedBoard: ProjectBoard = {
        ...this.data,
        name: this.projectForm.value.name,
        abbreviation: getAbbreviation(this.projectForm.value.name),
        columns: this.projectForm.value.columns.map(
          (column: Column, index: number) => ({
            columnName: getAbbreviation(column.columnName),
            boardItems: [],
          })
        ),
      };
      await this._projectsService.addNewProject(updatedBoard);
      this._dialogRef.close({ ...updatedBoard });
    }

    if (!editMode) {
      this._dialogRef.close({ ...this.projectForm.value });
    }
  }

  onCancel() {
    this._dialogRef.close();
  }
}
