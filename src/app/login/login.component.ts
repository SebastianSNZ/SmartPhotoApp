import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  userValue: any = {
    username: '',
    password: '',
  }

  ngOnInit(): void {
  }

  loginNewUser() {
    this.userValue.username = this.userValue.username.trim();
    if (this.userValue.username.trim() == '') return;
    this.userService.loginUser({
      password: this.userValue.password,
      username: this.userValue.username
    }).subscribe(
      (res) => {
        localStorage.setItem('userInfo', JSON.stringify(res));
        location.replace('/');
      },
      err => alert(err.error.error)
    );
  }

}
