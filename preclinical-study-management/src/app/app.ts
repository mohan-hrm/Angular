import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudyList } from './features/study/components/study-list/study-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudyList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Preclinical Study Management System';
}
