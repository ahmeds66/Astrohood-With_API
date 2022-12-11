import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
users: User[] = [
    {username : 'admin', password : 'admin', role : ['ADMIN']},
    {username : 'user', password : 'user', role : ['USER']},
    {username : 'guest', password : 'guest', role : ['GUEST']} ];
public loggedUser!: string;
public isLoggedIn: Boolean = false;
public roles!: string[];
  constructor(private router: Router ) {

  }

  logout(){
    this.isLoggedIn = false;
    this.loggedUser = '';
    this.roles = [];
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isLoggedIn',String(this.isLoggedIn));
    this.router.navigate(['/login']);
  }

  signIn(user: User): boolean{
    let foundUser = this.users.find(u => u.username === user.username);
    if(foundUser){
      if(foundUser.password === user.password){
        this.isLoggedIn = true;
        this.loggedUser = user.username;
        this.roles = foundUser.role;
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('isLoggedIn',String(this.isLoggedIn));
        this.router.navigate(['/']);
        return true;
      }
    }
    return false;
  }

  isAdmin(): boolean{
    if(!this.roles)
      return false;
    return (this.roles.indexOf('ADMIN') >-1);
  }

  setLoggedUserFromLocalStorage(login: string){
    this.loggedUser = login;
    this.isLoggedIn = true;
    this.getUsersRoles(login);
  }

  getUsersRoles(username: string){
    this.users.forEach((curUser) => { 
      if(curUser.username === username){
        this.roles = curUser.role;
      }
    });
  }
}
