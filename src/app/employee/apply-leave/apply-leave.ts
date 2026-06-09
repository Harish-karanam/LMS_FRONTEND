import { Component } from '@angular/core';
import { LeaveService } from '../../services/leave-service';

@Component({
  selector: 'app-apply-leave',
  standalone: false,
  templateUrl: './apply-leave.html',
  styleUrl: './apply-leave.css',
})

export class ApplyLeave {
  constructor(private leaveService: LeaveService) {}
  leaveRequest = {
  userId: 0,
  leaveTypeId: 0,
  startDate: '',
  endDate: '',
  reason: '',
  halfDay: false
};

applyLeave() {

  // 🔥 FIX: assign userId before API call
  this.leaveRequest.userId = Number(localStorage.getItem("userId"));

  console.log('Payload:', this.leaveRequest);

  this.leaveService.applyLeave(this.leaveRequest)
    .subscribe({
      next: (res) => {
        console.log(res);
        alert('Leave Applied Successfully');
      },
      error: (err) => {
        console.error(err);
      }
    });
  }}
