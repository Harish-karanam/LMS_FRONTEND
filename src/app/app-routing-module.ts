import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Login } from './login/login';
import { Registeration } from './registeration/registeration';

import { AdminDashboard } from './dashboard/admin-dashboard/admin-dashboard';
import { HrDashboard } from './dashboard/hr-dashboard/hr-dashboard';
import { ManagerDashboard } from './dashboard/manager-dashboard/manager-dashboard';
import { EmployeeDashboard } from './dashboard/employee-dashboard/employee-dashboard';

import { HrHome } from './hr/hr-home/hr-home';
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
    component: Registeration
  },

  {
    path: 'admin-dashboard',
    component: AdminDashboard
  },

  {
    path: 'hr-dashboard',
    component: HrDashboard
  },

  {
    path: 'manager-dashboard',
    component: ManagerDashboard
  },

  {
    path: 'employee-dashboard',
    component: EmployeeDashboard
  },
{ path: 'hr-home', component: HrHome },
{ path: 'hr-approvals', component: HrApprovals },
{ path: 'hr-users', component: HrUsers },
{ path: 'hr-projects', component: HrProjects },
{ path: 'hr-departments', component: HrDepartments },
{ path: 'hr-leave-types', component: HrLeaveTypes },
{ path: 'hr-leave-balances', component: HrLeaveBalances },


{ path: 'manager-home', component: ManagerHome },
{ path: 'manager-approvals', component: ManagerApprovals },
{ path: 'manager-team', component: ManagerTeam },
{ path: 'manager-projects', component: ManagerProjects },


{ path: 'admin-users', component: Users },
{ path: 'admin-departments', component: Departments },
{ path: 'admin-projects', component: Projects },
{ path: 'admin-roles', component: Roles },
{ path: 'admin-notifications', component: Notifications },
{ path: 'admin-audit-logs', component: AuditLogs },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }