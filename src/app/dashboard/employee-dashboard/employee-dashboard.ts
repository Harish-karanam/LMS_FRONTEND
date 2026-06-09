import { Component } from '@angular/core';
import { LeaveService } from '../../services/leave-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  standalone: false,
  templateUrl: './employee-dashboard.html',
  styleUrl: './employee-dashboard.css',
})
export class EmployeeDashboard {

  employeeName = '';

  balances: any[] = [];

  constructor(
    private leaveService: LeaveService,
    private router: Router
  ) {}

  ngOnInit() {

    this.employeeName =
      localStorage.getItem('name') || '';

    const userId =
      Number(localStorage.getItem('userId'));

    if (userId) {

      this.leaveService
        .getLeaveBalance()
        .subscribe({

          next: (res: any[]) => {

            this.balances = res.filter(
              balance => Number(balance.userId) === userId
            );

            console.log(
              'Leave Balances:',
              this.balances
            );
          },

          error: (error: any) => {

            console.error(error);
          }
        });
    }
  }
  getLeaveTypeName(id: number): string {
  if (id === 1) return 'Casual Leave';
  if (id === 2) return 'Sick Leave';
  if (id === 3) return 'Earned Leave';
  if (id === 4) return 'Maternity Leave';
  if (id === 5) return 'LOP';

  return 'Leave Type ' + id;
}

  logout() {

    localStorage.clear();

    this.router.navigate(['/login']);
  }
}