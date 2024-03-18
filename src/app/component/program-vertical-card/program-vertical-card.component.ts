import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { UserService } from '../profile/user.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-program-vertical-card',
  standalone: true,
  imports: [],
  templateUrl: './program-vertical-card.component.html',
})
export class ProgramVerticalCardComponent {
  @Input()
  program!: any;
  user!: string;
  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private authService: AuthService
  ) {}

  removeProgram(id: string) {
    return this.userService.deleteProgram(this.user, id).subscribe();
  }
}
