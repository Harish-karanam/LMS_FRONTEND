import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(
    private auth: Auth,
    private router: Router
  ) { }

  loginData = {
    email: '',
    password: ''
  };

  login() {

    this.auth.login(this.loginData)
      .subscribe({

        next: (response) => {

          console.log(response);

          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
          localStorage.setItem('name', response.name);
          localStorage.setItem('userId', response.userId);

          alert('Login Successful');
if (response.role === 'ROLE_ADMIN' || response.role === 'ADMIN') {
  this.router.navigate(['/admin-dashboard']);
}

else if (response.role === 'ROLE_HR' || response.role === 'HR') {
  this.router.navigate(['/hr-dashboard']);
}

else if (response.role === 'ROLE_MANAGER' || response.role === 'MANAGER') {
  this.router.navigate(['/manager-dashboard']);
}

else if (response.role === 'ROLE_EMPLOYEE' || response.role === 'EMPLOYEE') {
  this.router.navigate(['/employee-dashboard']);
}
        },

        error: (error) => {

          console.error(error);

          if (error.error?.message) {
            alert(error.error.message);
          } else {
            alert('Login Failed');
          }

        }

      });

  }

}