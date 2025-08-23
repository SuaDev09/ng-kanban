import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ThemeSwitcherComponent } from './shared/components/theme-switcher/theme-switcher.component';
import { SidebarComponent } from './shared/components/layout/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/layout/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-kanban';
}
