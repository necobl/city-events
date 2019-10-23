import {Injectable} from '@angular/core';
import {AppUser} from '../models/app-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly testUsers = [
    {
      firstName: 'Admin',
      lastName: 'Adminovic',
      username: 'admin',
      password: '123'
    },
    {
      firstName: 'Nemanja',
      lastName: 'Stancic',
      username: 'neco_bl',
      password: '123'
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      username: 'john',
      password: '123'
    }
  ];

  private users: Array<AppUser> = [];

  constructor() {
    this.testUsers.forEach((item) => {
      this.users.push(new AppUser(item));
    });
  }

  public findUserByUsernameAndPassword(username: string, password: string): AppUser {
    let user: AppUser = null;
    this.users.forEach(item => {
      if (item.username === username && item.password === password) {
        user = item;
      }
    });
    return user;
  }

  public getUsers() {
    return this.users;
  }
}
