import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-dashboard',
  standalone: false,
  templateUrl: './manager-dashboard.html',
  styleUrl: './manager-dashboard.css',
})
export class ManagerDashboard {

  managerName: string = '';

  constructor(private router: Router) {

    this.managerName =
      localStorage.getItem('name') || 'Manager';
  }

  logout() {

    localStorage.clear();

    this.router.navigate(['/login']);
  }
}