import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin-service';

@Component({
  selector: 'app-departments',
  standalone: false,
  templateUrl: './departments.html',
  styleUrl: './departments.css',
})
export class Departments implements OnInit {

  departments: any[] = [];

  constructor(private adminService: AdminService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.adminService.getAllDepartments().subscribe({
      next: (res: any[]) => {
        this.departments = res;
        console.log('Departments:', res);
         this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}