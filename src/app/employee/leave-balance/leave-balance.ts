import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../services/leave-service';

@Component({
  selector: 'app-leave-balance',
  standalone: false,
  templateUrl: './leave-balance.html',
  styleUrl: './leave-balance.css'
})
export class LeaveBalance implements OnInit {

  balances: any[] = [];

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void {

    const userId = Number(localStorage.getItem('userId'));

    this.leaveService.getLeaveBalance().subscribe({
      next: (response: any[]) => {

        this.balances = response.filter(
          balance => Number(balance.userId) === userId
        );

        console.log('My Leave Balances:', this.balances);
      },

      error: (error: any) => {
        console.error(error);
      }
    });
  }

  getLeaveTypeName(id: number): string {

    if (id === 1) {
      return 'Casual Leave';
    }

    if (id === 2) {
      return 'Sick Leave';
    }

    if (id === 3) {
      return 'Earned Leave';
    }

    if (id === 4) {
      return 'Maternity Leave';
    }

    if (id === 5) {
      return 'LOP';
    }

    return 'Leave Type ' + id;
  }
}