import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BaseSidebar } from '../../shared/components/base-sidebar';
import { SIDEBAR_MENUS } from '../../shared/config/sidebar-menus';

@Component({
  selector: 'app-sidebar-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: '../../shared/components/sidebar-generic.html',
  styleUrls: ['../../shared/styles/_sidebar.scss'] // ✅ note plural and correct path
})
export class SidebarAdmin extends BaseSidebar {
  constructor() {
    super();
    this.menu = SIDEBAR_MENUS['admin'];
  }
}