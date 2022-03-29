import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { SharedRoutingModule } from './shared-routing.module';
import {ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../component/Account/login/login.component';
import { RegisterComponent } from '../component/Account/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgetPasswordComponent } from '../component/forget-password/forget-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,ReactiveFormsModule,ToastrModule.forRoot(),BrowserAnimationsModule
  ]
})
export class SharedModule { }
