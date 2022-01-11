import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { HelperGuard } from './guard/helper.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [HelperGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [HelperGuard] },
  { path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]  },
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: '**', redirectTo: 'profile' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
