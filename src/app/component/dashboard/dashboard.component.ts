import { Component } from '@angular/core';
import { GymProgramService } from '../../gym-program.service';
import { Program } from '../../program';
import { ProgramCardComponent } from '../program-card/program-card.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProgramCardComponent, HeaderComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  gymPrograms: Program[] = [];
  constructor(private gymProgramService: GymProgramService) {}

  ngOnInit() {
    this.gymProgramService.getGymPrograms().subscribe((data) => {
      this.gymPrograms = data;
    });
  }
}
