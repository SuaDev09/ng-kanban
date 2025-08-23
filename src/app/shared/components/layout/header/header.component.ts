import { Component, inject } from '@angular/core';
import { ThemeSwitcherComponent } from '../../theme-switcher/theme-switcher.component';
import { ImageModule } from 'primeng/image';
import { CurrentThemeService } from '@app/shared/services/current-theme/current-theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeSwitcherComponent, ImageModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private _currentThemeService = inject(CurrentThemeService);
  LIGHT_ICON = 'icons/6.svg';
  DARK_ICON = 'icons/5.svg';

  LOGO = '';
  fallbackUrl = 'assets/icons/account.png';
  showConfigPanel = false;
  notificationQty = 0;

  ngOnInit(): void {
    this._currentThemeService.currentTheme$.subscribe((theme: string) => {
      if (theme === 'dark-theme') {
        this.LOGO = this.DARK_ICON;
      } else {
        this.LOGO = this.LIGHT_ICON;
      }
    });
  }
}
