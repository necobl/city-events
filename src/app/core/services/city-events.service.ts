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
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const filtered: Array<CityEvent> = [];

    this.cityEvents.forEach((item) => {
      if (item.eventDate) {
        const d = new Date(item.eventDate);
        if (d >= tomorrow) {

          if (categoryId) {
            if (item.categoryId === categoryId) {
              filtered.push(item);
            }
          } else {
            filtered.push(item);
          }
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
          name: 'NOĆNI KLUB DRAMA',
          categoryId: category.id,
          description: 'GRAND OPENING - WE ARE THE 90S',
          eventDate: new Date(Date.now()),
          imageUrl: 'https://www.banjaluka-tourism.com/images/Kafici_/drama.jpg'
        },
        {
          name: 'NOĆNI KLUB OPIUM',
          categoryId: category.id,
          description: 'IVANA BOJANOVIĆ I BALKAN BEAT BEND',
          eventDate: new Date(Date.now()),
          imageUrl: 'https://www.banjaluka-tourism.com/images/Kafici_/opium.jpg'
        },
        {
          name: 'NOĆNI KLUB KABINET',
          categoryId: category.id,
          description: 'DJ DAMJAN ELTECH (MASH UP) NIGHTS',
          eventDate: new Date(Date.now()),
          imageUrl: 'https://www.banjaluka-tourism.com/images/Kafici_/Kabinet.jpg'
        },
        {
          name: 'NOĆNI KLUB KRISTAL',
          categoryId: category.id,
          description: 'GRAND OPENING - WE ARE THE 90S',
          eventDate: new Date(Date.now() + 87506600 ),
          imageUrl: 'https://www.banjaluka-tourism.com/images/Kafici_/kristal.jpg'
        },
        {
          name: 'NOĆNI KLUB KSB',
          categoryId: category.id,
          description: 'DJ DAMJAN ELTECH (MASH UP) NIGHTS',
          eventDate: new Date(Date.now() + 88006600),
          imageUrl: 'https://www.banjaluka-tourism.com/images/Kafici_/ksb.jpg'
        },
        {
          name: 'NOĆNI KLUB VENECIJA',
          categoryId: category.id,
          description: 'IVANA BOJANOVIĆ I BALKAN BEAT BEND',
          eventDate: new Date(Date.now() + 90006600),
          imageUrl: 'https://www.banjaluka-tourism.com/images/Kafici_/venecija.jpg'
        }
        
        
      ];
      items.forEach((item) => {
        this.cityEvents.push(new CityEvent(item));
      });
      this.save();
    }
  }
}

