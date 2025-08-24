import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';

/**
 * A service to handle and display error messages in the application.
 * This service uses PrimeNG's `MessageService` to show error notifications.
 */
@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  private _messageService: MessageService = inject(MessageService);

  /**
   * Displays an error message and logs the error to the console.
   *
   * @param error - The error object to log for debugging purposes.
   * @param message - A user-friendly error message to display. Defaults to 'An unexpected error occurred.'.
   * @returns An observable that throws an error.
   */
  showError(
    error: unknown,
    message: string = 'An unexpected error occurred.'
  ): Observable<never> {
    this._messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
    console.error('Error:', error);
    return throwError(() => new Error(message));
  }
}
