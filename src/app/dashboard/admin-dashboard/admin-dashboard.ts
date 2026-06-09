import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {

  adminName: string = '';

  constructor() {
    this.adminName = localStorage.getItem('name') || 'Admin';
  }
}