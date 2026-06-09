import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-manager-team',
  standalone: false,
  templateUrl: './manager-team.html',
  styleUrl: './manager-team.css'
})
export class ManagerTeam implements OnInit {

  teamMembers: any[] = [];

  constructor(private auth: Auth, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadTeamMembers();

  }

   loadTeamMembers() {

  const managerId = Number(localStorage.getItem('userId'));

  this.auth.getAllUsers().subscribe({
    next: (response: any[]) => {
      console.log('All Users:', response);
      console.log('Logged Manager Id:', managerId);
         

      this.teamMembers = response.filter(
        user => Number(user.managerId) === managerId

      );
      this.cdr.detectChanges();


      console.log('Manager Team:', this.teamMembers);
    },

    error: (error: any) => {
      console.error(error);
      alert('Failed to load team members');
    }
  });
}
  }
