import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Login } from './login/login';
import { Registeration } from './registeration/registeration';

import { AdminDashboard } from './dashboard/admin-dashboard/admin-dashboard';
import { HrDashboard } from './dashboard/hr-dashboard/hr-dashboard';
import { ManagerDashboard } from './dashboard/manager-dashboard/manager-dashboard';
import { EmployeeDashboard } from './dashboard/employee-dashboard/employee-dashboard';


import { HrApprovals } from './hr/hr-approvals/hr-approvals';
import { HrUsers } from './hr/hr-users/hr-users';
import { HrProjects } from './hr/hr-projects/hr-projects';
import { HrDepartments } from './hr/hr-departments/hr-departments';
import { HrLeaveTypes } from './hr/hr-leave-types/hr-leave-types';
import { HrLeaveBalances } from './hr/hr-leave-balances/hr-leave-balances';

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
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'register',
    component: Registeration,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN', 'ADMIN'] }
  },

  {
    path: 'admin-dashboard',
    component: AdminDashboard,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN', 'ADMIN']}
    
  },

  {
    path: 'hr-dashboard',
    component: HrDashboard,
    canActivate: [AuthGuard],
     data: { roles: ['ROLE_HR', 'HR'] }
  },

  {
    path: 'manager-dashboard',
    component: ManagerDashboard,
    canActivate: [AuthGuard],
     data: { roles: ['ROLE_MANAGER', 'MANAGER'] }
  },

  {
    path: 'employee-dashboard',
    component: EmployeeDashboard,
    canActivate: [AuthGuard],
      data: { roles: ['ROLE_EMPLOYEE', 'EMPLOYEE'] }
  },

{ path: 'hr-approvals', component: HrApprovals,
  canActivate: [AuthGuard],
   data: { roles: ['ROLE_HR', 'HR'] }
 },
{ path: 'hr-users', component: HrUsers,
  canActivate: [AuthGuard],
   data: { roles: ['ROLE_HR', 'HR'] }
 },
{ path: 'hr-projects', component: HrProjects,
  canActivate: [AuthGuard],
   data: { roles: ['ROLE_HR', 'HR'] }
 },
{ path: 'hr-departments', component: HrDepartments,
  canActivate: [AuthGuard],
   data: { roles: ['ROLE_HR', 'HR'] }
 },
{ path: 'hr-leave-types', component: HrLeaveTypes,
  canActivate: [AuthGuard],
   data: { roles: ['ROLE_HR', 'HR'] }
 },
{ path: 'hr-leave-balances', component: HrLeaveBalances,
  canActivate: [AuthGuard],
   data: { roles: ['ROLE_HR', 'HR'] }
 },



{ path: 'manager-approvals', component: ManagerApprovals,
  canActivate: [AuthGuard],
   data: { roles: ['ROLE_MANAGER', 'MANAGER'] }
 },
{ path: 'manager-team', component: ManagerTeam,
  canActivate: [AuthGuard],
   data: { roles: ['ROLE_MANAGER', 'MANAGER'] }
 },
{ path: 'manager-projects', component: ManagerProjects,
  canActivate: [AuthGuard],
   data: { roles: ['ROLE_MANAGER', 'MANAGER'] }
 },



{ path: 'admin-users', component: Users,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_ADMIN', 'ADMIN']}
 },
{ path: 'admin-departments', component: Departments,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_ADMIN', 'ADMIN']}
 },
{ path: 'admin-projects', component: Projects,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_ADMIN', 'ADMIN']}
 },

{ path: 'admin-roles', component: Roles,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_ADMIN', 'ADMIN']}
 },

{ path: 'admin-notifications', component: Notifications,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_ADMIN', 'ADMIN']}
 },

{ path: 'admin-audit-logs', component: AuditLogs,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_ADMIN', 'ADMIN']}
 },
{ path: 'admin-new-user', component: Registeration,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_ADMIN', 'ADMIN']}
 },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }