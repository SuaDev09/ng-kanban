import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
} from '@angular/router';

import { routes } from '../app.routes';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';

import noirPreset from './theme.preset.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding(), withHashLocation()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom([BrowserModule]),
    {
      provide: MessageService,
    },
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: noirPreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.p-dark-mode',
        },
      },
    }),
  ],
};
