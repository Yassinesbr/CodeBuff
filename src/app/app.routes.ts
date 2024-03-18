import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ProgramPageComponent } from './component/program-page/program-page.component';
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
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];
