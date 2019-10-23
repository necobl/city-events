import {Injectable} from '@angular/core';
import {CityEvent} from '../../core/models/city-event.model';
import {LocalStorageService} from '../../core/services/local-storage.service';
import {CityEventsCategoryService} from './city-events-category.service';

@Injectable()
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

  public addEvent(cityEvent: CityEvent) {
    this.cityEvents.push(cityEvent);
    this.localStorageService.save(this.STORAGE_KEY, JSON.stringify(this.cityEvents));
  }

  public getEvents(): Array<CityEvent> {
    return this.cityEvents;
  }

  /*private loadFromLocalStorage() {
    this.data = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    this.data.forEach(t => {
      t.dueDate = new Date(t.dueDate);
    });
  }*/

  /*public getActiveEvents() {
    return this.getEvents().filter(e => e.active);
  }

  public getInactiveEvents() {
    return this.getEvents().filter(e => !e.active);
  }*/


  public completeEvents(name: string) {
    /*this.data.forEach(t => {
      if (t.name == name) {
        t.active = false;
      }
    });
    this.saveToLocalStorage();*/
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
          image_url: 'https://r3.whistleout.com/public/images/articles/2016/12/NEWYORKCITY.jpg'
        },
        {
          name: 'Test event 2',
          categoryId: category.id,
          description: 'test test test',
          eventDate: new Date(Date.now() + 186400000)
        }
      ];
      items.forEach((item) => {
        this.cityEvents.push(item);
      });
      this.localStorageService.save(this.STORAGE_KEY, JSON.stringify(this.cityEvents));
    }
  }
}

