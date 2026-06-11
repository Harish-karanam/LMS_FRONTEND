import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LeaveService } from '../../services/leave-service';

@Component({
  selector: 'app-hr-approvals',
  standalone: false,
  templateUrl: './hr-approvals.html',
  styleUrl: './hr-approvals.css'
})
export class HrApprovals implements OnInit {

  leaveRequests: any[] = [];

  selectedTab: string = 'managerApproved';

  constructor(
    private leaveService: LeaveService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadLeaveRequests();
  }

  loadLeaveRequests() {
    this.leaveService.getAllLeaveRequests().subscribe({
      next: (response: any[]) => {
        this.leaveRequests = response;
        this.cdr.detectChanges();
        console.log('HR Leave Requests:', response);
      },
      error: (error: any) => {
        console.error(error);
        alert('Failed to load leave requests');
      }
    });
  }

get managerApprovedLeaves() {
  return this.leaveRequests
    .filter(leave => leave.status === 'MANAGER_APPROVED')
    .sort((a, b) => b.id - a.id);
}

get managerNotApprovedLeaves() {
  return this.leaveRequests
    .filter(leave => leave.status === 'PENDING')
    .sort((a, b) => b.id - a.id);
}

  approveLeave(id: number) {
    this.leaveService.hrApproveLeave(id).subscribe({
      next: () => {
        alert('Leave Approved by HR');
        this.loadLeaveRequests();
      },
      error: (error: any) => {
        console.error(error);
        alert('HR approval success');
      }
    });
  }

  rejectLeave(id: number) {
  this.leaveService.hrRejectLeave(id).subscribe({
    next: () => {
      alert('HR Rejected');
      this.loadLeaveRequests();
    },

    error: (error: any) => {
      console.error(error);
      alert('HR Rejection failed');
    }
  });
}
}