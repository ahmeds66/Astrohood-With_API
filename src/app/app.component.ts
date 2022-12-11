import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rocket';
  constructor(public authService : AuthService,
              private router : Router){  }

  ngOnInit(){
    let isLoggedIn: any;
    let loggedUser: any;
    isLoggedIn= localStorage.getItem('isLoggedIn');
    loggedUser= localStorage.getItem('loggedUser');
    if(isLoggedIn!= 'true' || !loggedUser)
    {
      this.router.navigate(['/login']);
    }
    else
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
    onLogout() {
      this.authService.logout();
    }
  }

