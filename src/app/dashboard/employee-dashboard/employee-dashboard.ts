import { ChangeDetectorRef, Component } from '@angular/core';
import { LeaveService } from '../../services/leave-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-dashboard',
  standalone: false,
  templateUrl: './employee-dashboard.html',
  styleUrl: './employee-dashboard.css',
})
export class EmployeeDashboard {

  employeeName = '';
  balances: any[] = [];
  showLeaveHistoryDialog = false;

  constructor(
    private leaveService: LeaveService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private location: Location
  ) {}

  ngOnInit() {

    this.employeeName = localStorage.getItem('name') || '';

    const userId = Number(localStorage.getItem('userId'));

    if (userId) {
      this.leaveService.getLeaveBalance().subscribe({
        next: (res: any[]) => {
          this.balances = res.filter(
            balance => Number(balance.userId) === userId
          );

          this.cdr.detectChanges();

          console.log('Leave Balances:', this.balances);
        },

        error: (error: any) => {
          console.error(error);
        }
      });
    }

    this.route.queryParams.subscribe(params => {
      if (params['openHistory']) {
        this.openLeaveHistoryDialog();

        // clears ?openHistory without closing dialog
        this.location.replaceState('/employee-dashboard');
      }
    });
  }

  openLeaveHistoryDialog() {
  this.showLeaveHistoryDialog = false;

  setTimeout(() => {
    this.showLeaveHistoryDialog = true;
    this.cdr.detectChanges();
  }, 100);
}

  closeLeaveHistoryDialog() {
    this.showLeaveHistoryDialog = false;
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