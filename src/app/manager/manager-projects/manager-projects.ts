import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-manager-projects',
  standalone: false,
  templateUrl: './manager-projects.html',
  styleUrl: './manager-projects.css'
})
export class ManagerProjects implements OnInit {

  projects: any[] = [];

  constructor(private auth: Auth,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadManagerProject();
  }

  loadManagerProject() {
    const managerId = Number(localStorage.getItem('userId'));

    this.auth.getAllUsers().subscribe({
      next: (response: any[]) => {
        const manager = response.find(
          user => Number(user.id) === managerId
        );

        if (manager) {
          this.projects = [
            {
              projectName: manager.projectName,
              departmentName: manager.departmentName
            }

          ];
        }
        this.cdr.detectChanges();

        console.log('Manager Assigned Project:', this.projects);
      },

      error: (error: any) => {
        console.error(error);
        alert('Failed to load manager project');
      }
    });
  }
}