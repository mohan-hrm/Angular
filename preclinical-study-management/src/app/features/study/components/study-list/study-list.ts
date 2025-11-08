import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Study {
  id: number;
  studyCode: string;
  title: string;
  phase: string;
  startDate: string;
  status: string;
}

@Component({
  selector: 'app-study-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './study-list.html',
  styleUrl: './study-list.scss'
})
export class StudyList implements OnInit {

  studies: Study[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Study[]>('mock/studies.json').subscribe({
      next: (data) => {
        this.studies = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading studies:', err);
        this.loading = false;
      }
    });
  }
}
