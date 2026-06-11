import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LeaveService } from '../../services/leave-service';

@Component({
  selector: 'app-leave-history',
  standalone: false,
  templateUrl: './leave-history.html',
  styleUrl: './leave-history.css'
})
export class LeaveHistory implements OnInit {

  leaves: any[] = [];

  constructor(
    private leaveService: LeaveService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    const userId = Number(localStorage.getItem('userId'));

    if (userId) {

      this.leaveService.getMyLeaves(userId).subscribe({

        next: (response: any) => {

          this.leaves = response;

          console.log('Leave History:', this.leaves);

          this.cdr.detectChanges();
        },

        error: (error: any) => {

          console.error(error);
        }
      });
    }
  }
}