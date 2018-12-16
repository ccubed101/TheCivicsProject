import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login-component/login.component';
import { RegisterComponent } from './components/register-component/register.component';
import { LoginRegisterComponent } from './components/login-register-component/login-register.component';

const routes: Routes = [
  { path: '', component: LoginRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule { }

