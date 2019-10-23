import { Injectable } from '@angular/core';
import { Event } from './model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private data: Array<Event>=[];
  private STORAGE_KEY: string = "events-list";

  constructor() { 
  }

  private saveToLocalStorage(){
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
  }

  private loadFromLocalStorage(){
    this.data = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    this.data.forEach(t=>{
      t.dueDate = new Date(t.dueDate);
    });
  }

  public addEvent(event: Event) {
    this.data.push(event);
    this.saveToLocalStorage();
  }

  public getEvents() {
    this.loadFromLocalStorage();
    return this.data;
  }

  public getActiveEvents() {
    return this.getEvents().filter(e => e.active);
  }

  public getInactiveEvents() {
    return this.getEvents().filter(e => !e.active);
  }
  

  public completeEvents(name: string) {
    this.data.forEach(t => {
      if (t.name == name) {
        t.active = false;
      }
    });
    this.saveToLocalStorage();
  }
}

