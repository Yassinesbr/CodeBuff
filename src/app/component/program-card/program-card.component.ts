import { Component, Input } from '@angular/core';
import { Program } from '../../program';

@Component({
  selector: 'app-program-card',
  standalone: true,
  imports: [],
  templateUrl: './program-card.component.html',
})
export class ProgramCardComponent {
  @Input()
  program!: Program;
}
