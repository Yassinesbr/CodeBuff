import { Component } from '@angular/core';
import { AuthService } from '../../../auth.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../user.service';
import { BannerComponent } from '../../banner/banner.component';

@Component({
  selector: 'app-personal-infos',
  standalone: true,
  imports: [ReactiveFormsModule, BannerComponent],
  templateUrl: './personal-infos.component.html',
})
export class PersonalInfosComponent {
  personalInfosForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}
  user: any;
  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    this.personalInfosForm = this.formBuilder.group({
      firstName: [this.user.profile.firstName, Validators.required],
      lastName: [this.user.profile.lastName, Validators.required],
      email: [this.user.profile.email, [Validators.required, Validators.email]],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.user.profile.firstName = form.value.firstName;
      this.user.profile.lastName = form.value.lastName;
      this.user.profile.email = form.value.email;
      this.userService.updateUser(this.user).subscribe(() => {
        this.user = this.authService.getCurrentUser();
      });
    }
  }
}
