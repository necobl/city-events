import { Component, OnInit } from '@angular/core';
import {CityEventsService} from '../core/services/city-events.service';
import {CityEvent} from '../core/models/city-event.model';
import {CityEventCategory} from '../core/models/city-event-category.model';
import {CityEventsCategoryService} from '../core/services/city-events-category.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todayEvents: Array<CityEvent> = [];
  upcomingEvents: Array<CityEvent> = [];

  cityEventCategoryId: string;
  cityEventCategories: Array<CityEventCategory> = [];

  constructor(private cityEventsService: CityEventsService,
              private cityEventCategoryService: CityEventsCategoryService) {
  }

  ngOnInit() {
    this.loadTodayEvents();
    this.loadCategories();
    this.loadUpcomingEvents();
  }

  loadTodayEvents() {
    this.todayEvents = this.cityEventsService.getTodayEvents();
  }

  loadCategories() {
    this.cityEventCategories = this.cityEventCategoryService.getCategories();
  }

  onCategoryChanged(event) {
    this.loadUpcomingEvents();
  }

  loadUpcomingEvents() {
    this.upcomingEvents = this.cityEventsService.getUpcomingEvents(this.cityEventCategoryId);
  }



}
