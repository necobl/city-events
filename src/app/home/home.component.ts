import { Component, OnInit } from '@angular/core';
import {CityEventsService} from '../city-events/services/city-events.service';
import {CityEvent} from '../core/models/city-event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cityEvents: Array<CityEvent> = [];

  constructor(private cityEventsService: CityEventsService) { }

  ngOnInit() {
    this.cityEvents = this.cityEventsService.getEvents();
  }

}
