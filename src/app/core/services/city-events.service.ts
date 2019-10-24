import {Injectable} from '@angular/core';
import {CityEvent} from '../models/city-event.model';
import {LocalStorageService} from './local-storage.service';
import {CityEventsCategoryService} from './city-events-category.service';

@Injectable({
  providedIn: 'root'
})
export class CityEventsService {

  private cityEvents: Array<CityEvent> = [];

  private STORAGE_KEY = 'city-events-list';

  constructor(private localStorageService: LocalStorageService,
              private cityEventsCategoryService: CityEventsCategoryService) {
    this.cityEvents = JSON.parse(this.localStorageService.load(this.STORAGE_KEY));

    if (!this.cityEvents || !this.cityEvents.length) {
      this.seedCityEvents();
    }
  }

  private save() {
    this.localStorageService.save(this.STORAGE_KEY, JSON.stringify(this.cityEvents));
  }

  public getEvents(): Array<CityEvent> {
    return this.cityEvents;
  }

  getTodayEvents(): Array<CityEvent> {
    const today = new Date();
    return this.cityEvents.filter((item) => {
      const d = new Date(item.eventDate);
      return (item.eventDate &&
        d.getDay() === today.getDay() &&
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear());
    });
  }

  getUpcomingEvents(categoryId?: string): Array<CityEvent> {
    const today = new Date();
    const filtered: Array<CityEvent> = [];

    this.cityEvents.forEach((item) => {
      const d = new Date(item.eventDate);
      if (item.eventDate &&
        d.getDay() > today.getDay() &&
        d.getMonth() >= today.getMonth() &&
        d.getFullYear() >= today.getFullYear()) {

        if (categoryId) {
          if (item.categoryId === categoryId) {
            filtered.push(item);
          }
        } else {
          filtered.push(item);
        }
      }
    });

    return filtered;
  }

  public addEvent(cityEvent: CityEvent) {
    this.cityEvents.push(cityEvent);
    this.save();
  }

  public editEvent(cityEvent: CityEvent) {
    this.cityEvents.forEach((event) => {
      if (event.id === cityEvent.id) {
        Object.assign(event, cityEvent);
      }
    });
    this.save();
  }

  public deleteEvent(id: string) {
    let index = null;
    this.cityEvents.forEach((event, i) => {
      if (event.id === id) {
        index = i;
      }
    });
    if (index !== null) {
      this.cityEvents.splice(index, 1);
      this.save();
    }
  }


  private seedCityEvents() {
    this.cityEvents = this.cityEvents || [];
    const categories = this.cityEventsCategoryService.getCategories();
    if (categories && categories.length && categories.length > 0) {
      const category = categories[0];
      const items = [
        {
          name: 'Test event 1',
          categoryId: category.id,
          description: 'test test test',
          eventDate: new Date(Date.now() + 86400000),
          imageUrl: 'https://r3.whistleout.com/public/images/articles/2016/12/NEWYORKCITY.jpg'
        },
        {
          name: 'Test event 2',
          categoryId: category.id,
          description: 'test test test',
          eventDate: new Date(Date.now() + 186400000)
        }
      ];
      items.forEach((item) => {
        this.cityEvents.push(new CityEvent(item));
      });
      this.save();
    }
  }
}

