import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiResponse } from '@app/core/models/api-response.model';
import Project from '@app/core/models/project.model';
import { ErrorHandlerService } from '@app/shared/service/error-handler/error-handler.service';
import { catchError, firstValueFrom } from 'rxjs';

/**
 * Service to interact with the Projects API.
 * Provides methods to fetch project data from the backend.
 */
@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  private _httpClient: HttpClient = inject(HttpClient);
  private _errorHandler: ErrorHandlerService = inject(ErrorHandlerService);

  /**
   * Fetches the list of projects from the API.
   *
   * @returns A promise that resolves to an `ApiResponse` containing an array of `Project` objects.
   * @throws Will handle and rethrow any HTTP errors encountered during the request.
   */
  getProjects(): Promise<ApiResponse<Project[]>> {
    return firstValueFrom(
      this._httpClient.get<ApiResponse<Project[]>>(`jsons/projects.json`).pipe(
        catchError((error: HttpErrorResponse) => {
          this._errorHandler.showError(
            error,
            'Failed to fetch projects. Please try again later.'
          );
          throw error;
        })
      )
    );
  }
}
