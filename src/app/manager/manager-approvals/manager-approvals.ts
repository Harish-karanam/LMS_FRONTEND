import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { LeaveService } from '../../services/leave-service';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-manager-approvals',
  standalone: false,
  templateUrl: './manager-approvals.html',
  styleUrl: './manager-approvals.css'
})
export class ManagerApprovals implements OnInit {

  leaveRequests: any[] = [];

  constructor(
    private leaveService: LeaveService,
    private auth: Auth,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadManagerLeaves();
  }

  loadManagerLeaves() {

    const managerId =
      Number(localStorage.getItem('userId'));

    this.auth.getAllUsers().subscribe({

      next: (users: any[]) => {

        const teamMembers = users.filter(
          user => Number(user.managerId) === managerId
        );

        console.log('Team Members:', teamMembers);

        this.leaveService.getAllLeaveRequests()
          .subscribe({

            next: (leaves: any[]) => {

              console.log('All Leaves:', leaves);
this.leaveRequests = leaves
  .filter(leave =>
    teamMembers.some(user =>
      leave.employeeName === user.firstName ||
      leave.employeeName === `${user.firstName} ${user.lastName}` ||
      leave.employeeName === user.email ||
      leave.employeeName?.toLowerCase() === user.firstName?.toLowerCase()
    )
  )
  .sort((a, b) => b.id - a.id);

              console.log(
                'Manager Leave Requests:',
                this.leaveRequests
              );

              this.cdr.detectChanges();
            },

            error: (error: any) => {

              console.error(error);
            }
          });
      },

      error: (error: any) => {

        console.error(error);
      }
    });
  }

  approveLeave(id: number) {

    this.leaveService.managerApproveLeave(id)
      .subscribe({

        next: () => {

          alert('Manager Approved');

          this.loadManagerLeaves();
        },

        error: (error: any) => {

          console.error(error);

          alert('Approval failed');
        }
      });
  }

  rejectLeave(id: number) {

  this.leaveService
    .managerRejectLeave(id)
    .subscribe({

      next: () => {

        alert('Manager Rejected');

        this.loadManagerLeaves();
      },

      error: (error: any) => {

        console.error(error);

        alert('Rejection failed');
      }
    });
}
}