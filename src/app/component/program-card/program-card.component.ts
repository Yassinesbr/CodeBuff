import { Component, Input } from '@angular/core';
import { Program } from '../../program';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-program-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './program-card.component.html',
})
export class ProgramCardComponent {
  @Input()
  program!: Program;
}
