import {Component, OnInit} from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';
import {LoginService} from '../auth/services/login.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  public adminRoute: boolean;
  public opened = true;

  constructor(private router: Router,
              private loginService: LoginService) {
  }

  ngOnInit() {
    /* Initial route check */
    this.isAdminRoute(this.router.url);
    /* In case of route change */
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isAdminRoute(event.url);
      }
    });
  }

  private isAdminRoute(url) {
    this.adminRoute = url.startsWith('/admin');
  }

  toggleMenu() {
    this.opened = !this.opened;
  }

  loginLogout() {
    if(this.adminRoute) {
      this.loginService.logout();
    } else {
      this.router.navigate(['/auth']);
    }
  }

}
