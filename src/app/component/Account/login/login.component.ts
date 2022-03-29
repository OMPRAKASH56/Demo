import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  constructor(public authService: AuthService, private router:Router,private toastr:ToastrService) {}

  loginForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get f() {
    return this.loginForm.controls;
  }

  userLogin() {
    this.authService.loginApi(this.loginForm.value).subscribe(res=>{
      if(res.status==1){
      this.router.navigate(['login']);
      this.toastr.success('login successfully');
    }else{
      this.toastr.error('Login Failed');
    }
    });
  }
}
