import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-hr-projects',
  standalone: false,
  templateUrl: './hr-projects.html',
  styleUrl: './hr-projects.css'
})
export class HrProjects implements OnInit {

  projects: any[] = [];

  displayedColumns: string[] = [
    'id',
    'projectName',
    'description'
  ];

  constructor(
    private auth: Auth,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.auth.getAllProjects().subscribe({
      next: (response: any[]) => {
        setTimeout(() => {
          this.projects = response;
          this.cdr.detectChanges();
          console.log(response);
        });
      },

      error: (error: any) => {
        console.error(error);
        alert('Failed to load projects');
      }
    });
  }
}