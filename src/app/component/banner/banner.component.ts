import { Component, Input } from '@angular/core';
import { UserService } from '../profile/user.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  showBanner = false;
  @Input() message!: string;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.userUpdated.subscribe(() => {
      this.showBanner = true;
      setTimeout(() => {
        this.showBanner = false;
      }, 3000);
    });
  }
}
