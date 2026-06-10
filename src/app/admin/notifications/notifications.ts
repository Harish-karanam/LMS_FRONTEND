import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin-service';

@Component({
  selector: 'app-notifications',
  standalone: false,
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications implements OnInit {

  notifications: any[] = [];

  constructor(private adminService: AdminService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {

    this.adminService.getAllNotifications()
      .subscribe({

        next: (res: any[]) => {

          this.notifications = res;

          console.log(
            'Notifications:',
            this.notifications
          );
            this.cdr.detectChanges();
        },

        error: (error: any) => {

          console.error(error);
        }
      });
  }
}