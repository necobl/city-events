import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../core/services/user.service';
import {AppUser} from '../../core/models/app-user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public activeUser: AppUser;
  public signedIn: boolean;

  constructor(private router: Router,
              private userService: UserService) {
  }

  public login(username: string, password: string): boolean {
    this.activeUser = this.userService.findUserByUsernameAndPassword(username, password);
    const result: boolean = !!this.activeUser;
    this.signedIn = result;
    return result;
  }

  public logout() {
    this.activeUser = null;
    this.signedIn = false;
    this.router.navigate(['/']);
  }
}
