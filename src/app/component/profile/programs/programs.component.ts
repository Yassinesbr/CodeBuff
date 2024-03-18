import { Component } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { ProgramVerticalCardComponent } from '../../program-vertical-card/program-vertical-card.component';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [ProgramVerticalCardComponent],
  templateUrl: './programs.component.html',
})
export class ProgramsComponent {
  constructor(private authService: AuthService) {}
  user: any;
  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }
}
