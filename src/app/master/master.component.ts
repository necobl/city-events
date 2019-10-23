import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  public opened: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.opened = !this.opened;
  }

}
