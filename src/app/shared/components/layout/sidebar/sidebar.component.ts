import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { ProjectsService } from '@app/shared/services/projects/projects.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    ButtonModule,
    RouterLink,
    NgFor,
    RouterLinkActive,
    NgIf,
    MenuModule,
    PanelModule,
    NgStyle,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  private readonly _projectsService: ProjectsService = inject(ProjectsService);

  readonly sidebarWidth = '250px';
  readonly collapsedSidebarWidth = '60px';

  hasExpanded = false;

  items = [
    { label: 'Projects', icon: 'pi pi-fw pi-folder', routerLink: '/projects' },
    { label: 'Tasks', icon: 'pi pi-fw pi-list', routerLink: '/tasks' },
    { label: 'Settings', icon: 'pi pi-fw pi-cog', routerLink: '/settings' },
  ];

  ngOnInit(): void {
    this._projectsService.projects$.subscribe((projects) => {
      this.items.push(
        ...projects.map((project) => ({
          label: project.name,
          icon: '',
          abbreviation: project.abbreviation,
          routerLink: `/projects/${project.projectId}`,
        }))
      );
      console.log('Projects loaded:', projects);
    });
  }

  toggleSidebar() {
    this.hasExpanded = !this.hasExpanded;
  }
}
