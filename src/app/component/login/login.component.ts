import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userData:AuthService) { }
  userList:any;
  ngOnInit(): void {
    this.userList = this.userData.userDataApi();
  }
  

}
