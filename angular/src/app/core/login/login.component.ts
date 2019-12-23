import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {}

  constructor(private userService: UserService, private cookieService: CookieService, private router: Router) { }

  signin() {
    if (this.validateData()) {
      this.userService.userSignIn(this.user).subscribe(response => {
        this.cookieService.set('UID', response['token'], 1, '/', 'localhost');
        if (response['user']['role'] == 'student') {
          this.router.navigate(['/home'])
        } else {
          this.router.navigate(['/dashboard'])
        }
      }, err => {
        console.log(err)
      })
    }
  }

  validateData() {
    if (this.user.email && this.user.password) {
      return true
    }
    return false
  }

  ngOnInit() {
  }

}
