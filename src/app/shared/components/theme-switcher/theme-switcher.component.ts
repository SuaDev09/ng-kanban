import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrentThemeService } from '@app/shared/services/current-theme/current-theme.service';
import { PrimeIcons } from 'primeng/api';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [FormsModule, SelectButtonModule],

  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.css',
})
export class ThemeSwitcherComponent {
  private readonly _currentThemeService = inject(CurrentThemeService);

  themeSelected = 'light'; // Default theme
  themeOptions: any[] = [
    { icon: PrimeIcons.SUN, theme: 'p-light-mode' },
    { icon: PrimeIcons.MOON, theme: 'p-dark-mode' },
  ];
  toggleTheme(event: Event) {
    const element = document.documentElement;
    const checkbox = event.target as HTMLInputElement;
    const theme = checkbox.checked ? 'night' : 'light';
    document.documentElement.setAttribute('data-theme', theme);

    if (checkbox.checked) {
      element.classList.add('p-dark-mode'); // Add the dark mode class
      this._currentThemeService.setCurrentTheme('dark-theme'); // Set the dark theme
    } else {
      element.classList.remove('p-dark-mode'); // Remove the dark mode class
      this._currentThemeService.setCurrentTheme('light-theme'); // Set the light theme
    }
  }
}
