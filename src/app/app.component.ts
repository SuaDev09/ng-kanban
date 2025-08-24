import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SidebarComponent } from './shared/components/layout/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/layout/header/header.component';
import { ProjectsService } from './shared/services/projects/projects.service';

/**
 * The root component of the application.
 * It initializes the application, fetches project data, and sets up the layout.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    SidebarComponent,
    HeaderComponent,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /**
   * The title of the application.
   */
  title = 'ng-kanban';

  /**
   * Injected instance of the `ProjectsService` to manage project data.
   */
  private _projectsService: ProjectsService = inject(ProjectsService);

  /**
   * Lifecycle hook that is called after the component is initialized.
   * Fetches the list of projects from the API.
   */
  async ngOnInit(): Promise<void> {
    await this._projectsService.getProjects();
  }
}
