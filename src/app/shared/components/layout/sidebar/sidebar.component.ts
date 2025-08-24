import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';

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
  styleUrls: ['./sidebar.component.css'], // Fixed typo in 'styleUrl'
})
export class SidebarComponent {
  hasExpanded = false;

  items = [
    { label: 'Projects', icon: 'pi pi-fw pi-folder', routerLink: '/projects' },
    { label: 'Tasks', icon: 'pi pi-fw pi-list', routerLink: '/tasks' },
    { label: 'Settings', icon: 'pi pi-fw pi-cog', routerLink: '/settings' },
  ];

  toggleSidebar() {
    this.hasExpanded = !this.hasExpanded;
  }
}
