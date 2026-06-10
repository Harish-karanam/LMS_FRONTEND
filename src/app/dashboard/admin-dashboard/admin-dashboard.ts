import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {

  adminName: string = '';

  
  constructor(private router: Router) {
  this.adminName =
    localStorage.getItem('name') || 'Admin';
}
logout() {

  localStorage.clear();

  this.router.navigate(['/login']);
}
}