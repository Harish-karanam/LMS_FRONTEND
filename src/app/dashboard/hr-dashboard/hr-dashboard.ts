import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-dashboard',
  standalone: false,
  templateUrl: './hr-dashboard.html',
  styleUrl: './hr-dashboard.css'
})
export class HrDashboard {

  hrName: string = '';

  constructor(private router: Router) {

    this.hrName =
      localStorage.getItem('name') || 'HR';
  }

  logout() {

    localStorage.clear();

    this.router.navigate(['/login']);
  }
}