import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  constructor(public loginApiservice: AuthService) {}

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    user_name: new FormControl('', [Validators.required, Validators.email]),
  });

  get f() {
    return this.loginForm.controls;
  }

  userLogin() {
    this.loginApiservice.loginApi(this.loginForm.value);
  }
}
