import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token) {
      alert('Please login first');
      this.router.navigate(['/login']);
      return false;
    }

    const allowedRoles = route.data['roles'];

    if (allowedRoles && !allowedRoles.includes(role)) {

      alert('Access Denied');

      if (role === 'ROLE_ADMIN' || role === 'ADMIN') {
        this.router.navigate(['/admin-dashboard']);
      }
      else if (role === 'ROLE_HR' || role === 'HR') {
        this.router.navigate(['/hr-dashboard']);
      }
      else if (role === 'ROLE_MANAGER' || role === 'MANAGER') {
        this.router.navigate(['/manager-dashboard']);
      }
      else if (role === 'ROLE_EMPLOYEE' || role === 'EMPLOYEE') {
        this.router.navigate(['/employee-dashboard']);
      }

      return false;
    }

    return true;
  }
}