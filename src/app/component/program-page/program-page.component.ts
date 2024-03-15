import { Component } from '@angular/core';
import { GymProgramService } from '../../gym-program.service';
import { Program } from '../../program';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-program-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './program-page.component.html',
})
export class ProgramPageComponent {
  program: Program | undefined;
  constructor(
    private gymProgramService: GymProgramService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.gymProgramService.getProgramById(id).subscribe((data) => {
      this.program = data;
    });
  }
}
