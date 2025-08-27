import { NgFor, NgIf, NgStyle, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { ProjectsService } from '@app/shared/services/projects/projects.service';
import { DialogService } from 'primeng/dynamicdialog';
import { NewProjectComponent } from '../../modals/new-project/new-project.component';

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
    NgClass,
  ],
  providers: [DialogService],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  private readonly _dialogService: DialogService = inject(DialogService);
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

  openNewProject() {
    console.log('opsfs');
    this._dialogService.open(NewProjectComponent, {
      header: 'New Project',
      width: '35vw',
      modal: true,
      closable: true,
      contentStyle: { overflow: 'auto' },
    });
  }
}
