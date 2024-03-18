import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {}
