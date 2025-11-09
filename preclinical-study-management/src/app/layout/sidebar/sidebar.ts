import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  @Input() collapsed = false;

  isStudiesOpen = true;
  isAssignmentsOpen = false;
  isTemplatesOpen = false;

  toggleStudies() {
    this.isStudiesOpen = !this.isStudiesOpen;
  }

  toggleAssignments() {
    this.isAssignmentsOpen = !this.isAssignmentsOpen;
  }

  toggleTemplates() {
    this.isTemplatesOpen = !this.isTemplatesOpen;
  }
}
