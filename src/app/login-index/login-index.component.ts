import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.css']
})
export class LoginIndexComponent implements OnInit {
user = new User();
error=0;
  constructor(private authService: AuthService,
              private router : Router ) { }

  ngOnInit(): void {
  }
  onLoggedin(){
    console.log(this.user);
    let isValideUser : boolean = this.authService.signIn(this.user);
    if(isValideUser)
      this.router.navigate(['/']);
    else
      alert('Invalid Credentials');
      this.error=1;
  }
}
