import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  themeSelected = 'light'; // Default theme
  themeOptions: any[] = [
    { icon: PrimeIcons.SUN, theme: 'p-light-mode' },
    { icon: PrimeIcons.MOON, theme: 'p-dark-mode' },
  ];
  isDarkMode = false; // Initial theme state
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const element = document.documentElement;
    if (this.isDarkMode) {
      element.classList.add('p-dark-mode');
    } else {
      element.classList.remove('p-dark-mode');
    }
  }
}
