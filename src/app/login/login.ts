import { Component } from '@angular/core';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private auth: Auth) {}

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

          alert('Login Successful');

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