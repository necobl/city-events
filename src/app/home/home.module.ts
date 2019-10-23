import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {FormsModule} from '@angular/forms';
import {CityEventsModule} from '../city-events/city-events.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    CityEventsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
