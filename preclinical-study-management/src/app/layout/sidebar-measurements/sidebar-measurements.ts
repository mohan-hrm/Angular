import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-measurements',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-measurements.html',
  styleUrl: './sidebar-measurements.scss',
})
export class SidebarMeasurements {
  @Input() collapsed = false;
}