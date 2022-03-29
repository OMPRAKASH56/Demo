import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/component/Account/login/login.component';
import { RegisterComponent } from 'src/app/component/Account/register/register.component';
import { ForgetPasswordComponent } from '../component/forget-password/forget-password.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login', 
    component:LoginComponent
  },{
    path:'register', 
    component:RegisterComponent
  },{
    path:'forget_pass',
    component:ForgetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
