import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ThemeSwitcherComponent } from './shared/components/theme-switcher/theme-switcher.component';
import { SidebarComponent } from './shared/components/layout/sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    ThemeSwitcherComponent,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-kanban';
}
