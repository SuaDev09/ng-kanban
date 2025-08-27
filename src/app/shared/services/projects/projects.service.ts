import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import Project from '@app/core/models/project.model';
import { ProjectsApiService } from '@app/shared/api/projects/projects.api.service';
import { ProjectBoard } from '@app/core/models/project-board.model';

/**
 * Service to manage project data in the application.
 * It fetches data from the API and provides an observable for project updates.
 */
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private _projectsApiService: ProjectsApiService = inject(ProjectsApiService);

  /**
   * A BehaviorSubject to store the list of projects.
   * It allows components to subscribe to project updates.
   */
  private _projects: BehaviorSubject<ProjectBoard[]> = new BehaviorSubject<
    ProjectBoard[]
  >([]);

  /**
   * An observable that emits the current list of projects.
   */
  projects$: Observable<ProjectBoard[]> = this._projects.asObservable();

  /**
   * Fetches the list of projects from the API and updates the `_projects` BehaviorSubject.
   * If the API call fails, it logs the error and ensures the BehaviorSubject remains unchanged.
   */
  async getProjects(): Promise<void> {
    try {
      const projects = await this._projectsApiService.getProjects();
      this._projects.next(
        projects.data || [
          {
            projectId: 1,
            name: 'Project Alpha',
            abbreviation: 'PA',
            columns: [],
          },
        ]
      );
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    }
  }

  async addNewProject(project: ProjectBoard) {
    const currentProjects = await firstValueFrom(this.projects$);
    this._projects.next([...currentProjects, project]);
  }
}
