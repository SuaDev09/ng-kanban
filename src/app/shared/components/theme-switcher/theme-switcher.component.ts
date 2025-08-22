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
    { icon: PrimeIcons.SUN, theme: 'light' },
    { icon: PrimeIcons.MOON, theme: 'dark' },
  ];

  toggleDarkMode() {
    // const element = document.querySelector('html');
    // if (element) {
    //   element.classList.toggle('p-dark-mode');
    // }
    const element = document.querySelector('html');
    if (element) {
      console.log(element.classList);
      element.classList.toggle('p-dark-mode');
    }
  }
}
