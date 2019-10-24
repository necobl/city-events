import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {FormsModule} from '@angular/forms';
import {CityEventsModule} from '../city-events/city-events.module';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HomeComponent,
    WeatherComponent],
  imports: [
    CommonModule,
    FormsModule,
    CityEventsModule,
    HttpClientModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
