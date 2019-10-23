import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../model/event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cityEvents: Array<Event> = [];


  constructor(private  eventsService: EventService) { }

  ngOnInit() {
    this.cityEvents = this.eventsService.getEvents();
  }

}
