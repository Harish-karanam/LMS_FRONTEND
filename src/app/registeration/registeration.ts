import { Component } from '@angular/core';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-registeration',
  standalone: false,
  templateUrl: './registeration.html',
  styleUrl: './registeration.css'
})
export class Registeration {

  constructor(private auth: Auth) { }

  registrationData = {
    employeeCode: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roleId: null,
    managerId: null,
    departmentId: null,
    projectId: null,
    joiningDate: ''
  };

  register() {

    this.auth.register(this.registrationData)
      .subscribe({

        next: (response) => {
          console.log(response);
          alert('Registration Successful');
        },

        error: (error) => {
          console.error(error);
          alert('Registration Failed');
        }

      });

  }

}