import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/model/user.model';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  public user: User;

  constructor(private loginService: LoginService) {
    this.user = this.loginService.activeUser;
  }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
  }

}
