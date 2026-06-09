import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-dashboard',
  standalone: false,
  templateUrl: './hr-dashboard.html',
  styleUrl: './hr-dashboard.css'
})
export class HrDashboard {

  hrName: string = '';

  constructor() {
    this.hrName = localStorage.getItem('name') || 'HR';
    
  }
}