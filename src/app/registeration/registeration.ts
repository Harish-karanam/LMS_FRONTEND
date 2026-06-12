// import { Component } from '@angular/core';
// import { Auth } from '../services/auth';

// @Component({
//   selector: 'app-registeration',
//   standalone: false,
//   templateUrl: './registeration.html',
//   styleUrl: './registeration.css'
// })
// export class Registeration {

//   constructor(private auth: Auth) { }

//   registrationData = {
//     employeeCode: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     roleId: null,
//     managerId: null,
//     departmentId: null,
//     projectId: null,
//     joiningDate: ''
//   };

//   register() {

//     this.auth.register(this.registrationData)
//       .subscribe({

//         next: (response) => {
//           console.log(response);
//           alert('Registration Successful');
//         },

//         error: (error) => {
//           console.error(error);
//           alert('Registration Failed');
//         }

//       });

//   }

// }

import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  standalone: false,
  templateUrl: './registeration.html',
  styleUrl: './registeration.css'
})
export class Registeration {

  registrationForm: FormGroup;

  constructor(
    private auth: Auth,
    private fb: FormBuilder
  ) {

    this.registrationForm = this.fb.group({
      employeeCode: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      roleId: [null, Validators.required],
      managerId: [null, Validators.required],
      departmentId: [null, Validators.required],
      projectId: [null, Validators.required],
      joiningDate: ['', Validators.required]
    });

  }

  register() {

    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    const registrationData = this.registrationForm.value;

    this.auth.register(registrationData)
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