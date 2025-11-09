
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Output() menuToggle = new EventEmitter<void>();

  toggleMenu() {
    this.menuToggle.emit();
  }
  currentUrl = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentUrl = event.urlAfterRedirects;
      });
  }

  isActive(section: string): boolean {
    switch (section) {
      case 'study':
        return (
          this.currentUrl.startsWith('/studies') ||
          this.currentUrl.startsWith('/assignments') ||
          this.currentUrl.startsWith('/create-study') ||
          this.currentUrl.startsWith('/audit-trail') ||
          this.currentUrl.startsWith('/templates') ||
          this.currentUrl.startsWith('/study') ||
          this.currentUrl.startsWith('/compound')
        );

      case 'animal':
        return this.currentUrl.startsWith('/animals');

      case 'measurements':
        return this.currentUrl.startsWith('/measurements');

      case 'reports':
        return this.currentUrl.startsWith('/reports');

      case 'admin':
        return this.currentUrl.startsWith('/admin');

      case 'help':
        return this.currentUrl.startsWith('/help');

      default:
        return this.currentUrl === '/dashboard';
    }
  }
}
