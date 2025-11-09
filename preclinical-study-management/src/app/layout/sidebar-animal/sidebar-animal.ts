import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-animal',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-animal.html',
  styleUrl: './sidebar-animal.scss',
})
export class SidebarAnimal {
  @Input() collapsed = false;
}


