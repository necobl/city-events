import {Injectable} from '@angular/core';
import {CityEvent} from '../../core/models/city-event.model';
import {LocalStorageService} from '../../core/services/local-storage.service';

@Injectable()
export class CityEventsService {

  private cityEvents: Array<CityEvent> = [];

  private STORAGE_KEY = 'city-events-list';

  constructor(private localStorageService: LocalStorageService) {
    this.cityEvents = JSON.parse(this.localStorageService.load(this.STORAGE_KEY));
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
}

