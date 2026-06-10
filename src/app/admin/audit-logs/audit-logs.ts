import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin-service';

@Component({
  selector: 'app-audit-logs',
  standalone: false,
  templateUrl: './audit-logs.html',
  styleUrl: './audit-logs.css',
})
export class AuditLogs implements OnInit {

  auditLogs: any[] = [];

  constructor(private adminService: AdminService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.adminService.getAllAuditLogs().subscribe({
      next: (res: any[]) => {
        this.auditLogs = res;
        console.log('Audit Logs:', res);
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}