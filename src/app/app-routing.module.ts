import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './registration/login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignUpComponent } from './registration/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

