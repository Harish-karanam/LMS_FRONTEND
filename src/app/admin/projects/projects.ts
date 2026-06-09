import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin-service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {

  projects: any[] = [];

  constructor(private adminService: AdminService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {

    this.adminService.getAllProjects()
      .subscribe({

        next: (res: any[]) => {

          this.projects = res;
           this.cdr.detectChanges();

          console.log(
            'Projects:',
            this.projects
          );
        },

        error: (error: any) => {

          console.error(error);
        }
      });
  }
}