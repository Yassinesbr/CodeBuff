import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ProgramPageComponent } from './component/program-page/program-page.component';
import { ProgramsComponent } from './component/profile/programs/programs.component';
import { SettingsComponent } from './component/profile/settings/settings.component';
import { PersonalInfosComponent } from './component/profile/personal-infos/personal-infos.component';
import { ProfileComponent } from './component/profile/profile.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'programs/:id',
    component: ProgramPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'personal-infos', pathMatch: 'full' },
      {
        path: 'personal-infos',
        component: PersonalInfosComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'programs',
        component: ProgramsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];
