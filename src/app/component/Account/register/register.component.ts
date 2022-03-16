import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(public register:AuthService ,private router: Router) {}
  ngOnInit(): void {}
  registerForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  get f() {
    return this.registerForm.controls;
  }
  registerF() {
    this.register.registerApi(this.registerForm.value).subscribe(res=>{
      if(res.flag==1){
        this.router.navigate(['login']);
      }
    });
  }
}
