import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CloseEventsComponent} from './close-events/close-events.component';
import {EventCardComponent} from './event-card/event-card.component';
import {CityEventsService} from './services/city-events.service';
import {EventManageComponent} from './event-manage/event-manage.component';
import {EventsListComponent} from './events-list/events-list.component';
import {CityEventsCategoryService} from './services/city-events-category.service';


@NgModule({
  declarations: [
    CloseEventsComponent,
    EventCardComponent,
    EventManageComponent,
    EventsListComponent
  ],
  entryComponents: [
    CloseEventsComponent,
    EventManageComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CloseEventsComponent,
    EventCardComponent,
    EventManageComponent
  ],
  providers: [CityEventsService, CityEventsCategoryService]
})
export class CityEventsModule { }
