import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsCreateComponent } from './events/events-create/events-create.component';
import { CloseEventsComponent } from './events/close-events/close-events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsCategoryComponent } from './events/events-category/events-category.component';
import { EventsEditComponent } from './events/events-edit/events-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventCardComponent } from './events/event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsCreateComponent,
    CloseEventsComponent,
    EventsCategoryComponent,
    EventsEditComponent,
    DashboardComponent,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    EventsCreateComponent,
    CloseEventsComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
