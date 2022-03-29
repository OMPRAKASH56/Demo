import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private auth:AuthService , private router:Router, private toastr:ToastrService) { }
  forgetPass =new FormGroup({
    password: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    repeat_password: new FormControl('',[Validators.required]),

  });
  
  get f() {
    return this.forgetPass.controls;
  }
  onSubmit(){
      this.auth.resetPassword(this.forgetPass.value).subscribe(res=>{
            if(res.status==1){
              this.router.navigate(['login']);
              this.toastr.info('Password updated successfully');
            }else if(res.status==0){
              this.router.navigate(['forget']);
              this.toastr.warning('Password not valid and correct');
            }
      });
  }

  ngOnInit(): void {
  }

}
