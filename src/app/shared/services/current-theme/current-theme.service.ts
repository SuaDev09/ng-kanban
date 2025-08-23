import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentThemeService {
  private _currentTheme: BehaviorSubject<'light-theme' | 'dark-theme'> =
    new BehaviorSubject<'light-theme' | 'dark-theme'>('light-theme');

  currentTheme$ = this._currentTheme.asObservable();

  setCurrentTheme(theme: 'light-theme' | 'dark-theme') {
    this._currentTheme.next(theme);
  }
}
