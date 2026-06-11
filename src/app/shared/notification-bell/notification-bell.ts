import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin-service';

@Component({
  selector: 'app-notification-bell',
  standalone: false,
  templateUrl: './notification-bell.html',
  styleUrl: './notification-bell.css'
})
export class NotificationBell implements OnInit {

  notifications: any[] = [];

  showBox = false;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications() {
    this.adminService.getMyNotifications().subscribe({
      next: (res: any[]) => {
        this.notifications = res.filter(
          notification => notification.status === 'UNREAD'
        );

        this.cdr.detectChanges();

        console.log('Unread Notifications:', this.notifications);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  toggleNotifications() {
    this.showBox = !this.showBox;
  }

  openNotification(notification: any) {

    this.adminService
      .markNotificationAsRead(notification.id)
      .subscribe({

        next: () => {

          this.notifications = this.notifications.filter(
            n => n.id !== notification.id
          );

          this.cdr.detectChanges();

          this.showBox = false;

          const role = localStorage.getItem('role');

          if (role === 'ROLE_EMPLOYEE') {
            this.router.navigate(['/employee-dashboard'], {
              queryParams: {
                openHistory: new Date().getTime()
              }
            });
          }

          else if (role === 'ROLE_MANAGER') {
            this.router.navigate(['/manager-approvals']);
          }

          else if (role === 'ROLE_HR') {
            this.router.navigate(['/hr-approvals']);
          }
        },

        error: (error: any) => {
          console.error(error);
        }
      });
  }
}