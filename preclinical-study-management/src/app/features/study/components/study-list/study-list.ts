/**
 * ==========================================
 *  STUDY LIST COMPONENT (Preclinical Domain)
 * ==========================================
 *  - Purpose: Displays a list of preclinical studies with mock data.
 *  - Architecture: Standalone Component (Angular 18+ / Vite Builder)
 *  - Data Source: public/mock/studies.json
 *  - Features:
 *      ✔ Loads data via HttpClient
 *      ✔ Displays a simple HTML table
 *      ✔ Uses *ngIf and *ngFor for UI logic
 *  - Author: Mohan Natesan
 *  - Version: v1.0  (Base UI + Mock Data)
 *  - Date: Nov 2025
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

/**
 * Study Interface
 * ----------------------------
 * Defines the structure of a single study record.
 * This ensures type safety for both mock and real API data.
 */
interface Study {
  id: number;            // Unique identifier for each study
  studyCode: string;     // System or sponsor-assigned code
  title: string;         // Study name or description
  phase: string;         // Phase (e.g., Preclinical, Toxicology)
  startDate: string;     // Planned or actual start date
  status: string;        // Status (Ongoing, Completed, Planned, etc.)
}

/**
 * Component Declaration
 * ----------------------------
 * @Component is a decorator (similar to Java annotations)
 * that tells Angular this class represents a reusable UI element.
 */
@Component({
  selector: 'app-study-list',      // <app-study-list> in HTML
  standalone: true,                // Standalone = no NgModule required
  imports: [CommonModule],         // Brings *ngIf, *ngFor, etc.
  templateUrl: './study-list.html', // Component HTML file
  styleUrl: './study-list.scss'     // Component style (SCSS)
})

/**
 * Class: StudyList
 * ----------------------------
 *  - Implements OnInit lifecycle hook
 *  - Loads data when the component is first rendered
 */
export class StudyList implements OnInit {

  /**
   * Properties
   * ----------------------------
   * studies → holds list of study objects
   * loading → controls spinner or loading text
   */
  studies: Study[] = [];
  loading = true;

  /**
   * Dependency Injection
   * ----------------------------
   * Angular automatically injects an instance of HttpClient here.
   * Equivalent to Java Spring’s @Autowired.
   */
  constructor(private http: HttpClient) {}

  /**
   * Lifecycle Hook: ngOnInit()
   * ----------------------------
   * Called once, right after the component is created.
   * Think of it as “component constructor + post-init”.
   */
  ngOnInit(): void {

    /**
     * HttpClient GET Request
     * ----------------------------
     *  - Reads data from mock file in 'public/mock/studies.json'
     *  - Returns an Observable<Study[]>
     *  - Subscribe() starts the async call
     */
    this.http.get<Study[]>('mock/studies.json').subscribe({
      // ✅ Successful response
      next: (data) => {
        this.studies = data;   // assign to local array
        this.loading = false;  // hide the loading message
      },

      // ❌ In case of network/file error
      error: (err) => {
        console.error('Error loading studies:', err);
        this.loading = false;
      }
    });
  }
}
