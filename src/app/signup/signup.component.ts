import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  newUser: any = {
    username: '',
    password: '',
    password2: ''
  };

  ngOnInit(): void {
  }

  createNewUser() {
    this.newUser.username = this.newUser.username.trim();
    if (this.newUser.username == '') return;
    if (this.newUser.password != this.newUser.password2) return;
    this.userService.createUser({
      username: this.newUser.username,
      password: this.newUser.password
    }).subscribe(
      (res) => {
        localStorage.setItem('userInfo', JSON.stringify(res));
        location.replace('/');
      },
      (err) => alert(err.error.error)
    )
  } 

}
