import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin-service';

@Component({
  selector: 'app-roles',
  standalone: false,
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles implements OnInit {

  roles: any[] = [];

  constructor(private adminService: AdminService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.adminService.getAllRoles().subscribe({
      next: (res: any[]) => {
        this.roles = res;
        console.log('Roles:', res);
         this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}