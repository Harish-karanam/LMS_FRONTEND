import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';

import { App } from './app';
import { Header } from './header/header';
import { Registeration } from './registeration/registeration';
import { Login } from './login/login';

import { AdminDashboard } from './dashboard/admin-dashboard/admin-dashboard';
import { HrDashboard } from './dashboard/hr-dashboard/hr-dashboard';
import { ManagerDashboard } from './dashboard/manager-dashboard/manager-dashboard';
import { EmployeeDashboard } from './dashboard/employee-dashboard/employee-dashboard';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HrHome } from './hr/hr-home/hr-home';
import { HrApprovals } from './hr/hr-approvals/hr-approvals';
import { HrUsers } from './hr/hr-users/hr-users';
import { HrProjects } from './hr/hr-projects/hr-projects';
import { HrDepartments } from './hr/hr-departments/hr-departments';
import { HrLeaveTypes } from './hr/hr-leave-types/hr-leave-types';
import { HrLeaveBalances } from './hr/hr-leave-balances/hr-leave-balances';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor';

import { MatTableModule } from '@angular/material/table';
import { ApplyLeave } from './employee/apply-leave/apply-leave';
import { LeaveBalance } from './employee/leave-balance/leave-balance';
import { LeaveHistory } from './employee/leave-history/leave-history';
import { MatSelectModule } from '@angular/material/select';
import { ManagerHome } from './manager/manager-home/manager-home';
import { ManagerApprovals } from './manager/manager-approvals/manager-approvals';
import { ManagerTeam } from './manager/manager-team/manager-team';
import { ManagerProjects } from './manager/manager-projects/manager-projects';
import { Users } from './admin/users/users';
import { Departments } from './admin/departments/departments';
import { Projects } from './admin/projects/projects';
import { Roles } from './admin/roles/roles';
import { Notifications } from './admin/notifications/notifications';
import { AuditLogs } from './admin/audit-logs/audit-logs';
import { MatIconModule } from '@angular/material/icon';
import { NotificationBell } from './shared/notification-bell/notification-bell';

@NgModule({
  declarations: [
    App,
    Header,
    Registeration,
    Login,
    AdminDashboard,
    HrDashboard,
    ManagerDashboard,
    EmployeeDashboard,
    HrHome,
    HrApprovals,
    HrUsers,
    HrProjects,
    HrDepartments,
    HrLeaveTypes,
    HrLeaveBalances,
    ApplyLeave,
    LeaveBalance,
    LeaveHistory,
    ManagerHome,
    ManagerApprovals,
    ManagerTeam,
    ManagerProjects,
    Users,
    Departments,
    Projects,
    Roles,
    Notifications,
    AuditLogs,
    NotificationBell,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
  MatIconModule,
  ],

  providers: [
    provideBrowserGlobalErrorListeners(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],

  bootstrap: [App],
})
export class AppModule {}
