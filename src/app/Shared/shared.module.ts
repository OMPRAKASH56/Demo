import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../component/Account/login/login.component';
import { RegisterComponent } from '../component/Account/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,ReactiveFormsModule,FormsModule,
  ]
})
export class SharedModule { }
