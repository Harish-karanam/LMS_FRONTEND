import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin-service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {

  users: any[] = [];

  constructor(private adminService: AdminService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe({
      next: (res: any[]) => {
        this.users = res;
        console.log('Admin Users:', res);
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error(error);
      }
      

    });
  }
}