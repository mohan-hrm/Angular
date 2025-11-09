import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { SidebarStudy } from '../sidebar-study/sidebar-study';
import { SidebarAnimal } from '../sidebar-animal/sidebar-animal';
import { SidebarMeasurements } from '../sidebar-measurements/sidebar-measurements';
import { SidebarReports } from '../sidebar-reports/sidebar-reports';
import { SidebarAdmin } from '../sidebar-admin/sidebar-admin';
import { SidebarHelp } from '../sidebar-help/sidebar-help';


@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    Footer,
    SidebarStudy,
    SidebarAnimal,
    SidebarMeasurements,
    SidebarReports,
    SidebarAdmin,
    SidebarHelp
  ],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss'
})

export class AppShell {
  sidebarOpen = true;
  activeSection = 'study'; // default

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = event.urlAfterRedirects;
        if (url.startsWith('/animals')) this.activeSection = 'animals';
        else if (url.startsWith('/measurements')) this.activeSection = 'measurements';
        else if (url.startsWith('/reports')) this.activeSection = 'reports';
        else if (url.startsWith('/admin')) this.activeSection = 'admin';
        else if (url.startsWith('/help')) this.activeSection = 'help';
        else this.activeSection = 'study';
      });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  closeSidebar() {
    this.sidebarOpen = false;
  }
  closeSidebarIfOpen() {
    if (this.sidebarOpen) this.sidebarOpen = false;
  }
}
