import { Component, OnInit, Input } from '@angular/core';
import {CityEvent} from '../../core/models/city-event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() public cityEvent: CityEvent;

  constructor() { }

  ngOnInit() {
  }

}
