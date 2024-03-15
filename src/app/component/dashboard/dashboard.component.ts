import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { GymProgramService } from '../../gym-program.service';
import { Program } from '../../program';
import { ProgramCardComponent } from '../program-card/program-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProgramCardComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  gymPrograms: Program[] = [];
  constructor(
    private authService: AuthService,
    private router: Router,
    private gymProgramService: GymProgramService
  ) {}

  ngOnInit() {
    this.gymProgramService.getGymPrograms().subscribe((data) => {
      this.gymPrograms = data;
      console.log(this.gymPrograms);
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
