import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-hr-users',
  standalone: false,
  templateUrl: './hr-users.html',
  styleUrl: './hr-users.css'
})
export class HrUsers implements OnInit {

  users: any[] = [];

  displayedColumns: string[] = [
    'employeeCode',
    'name',
    'email',
    'roleName',
    'managerName',
    'departmentName',
    'projectName',
    'status',
    'joiningDate'
  ];

  constructor(
    private auth: Auth,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.auth.getAllUsers().subscribe({
      next: (response: any[]) => {
        setTimeout(() => {
          this.users = response;
          this.cdr.detectChanges();
          console.log(response);
        });
      },

      error: (error: any) => {
        console.error(error);
        alert('Failed to load users');
      }
    });
  }
}