import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {FormsModule} from '@angular/forms';
import {CityEventsModule} from '../city-events/city-events.module';
import {HttpClientModule} from '@angular/common/http';
import {WeatherComponent} from './weather/weather.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppMaterialModule} from '../app-material/app-material.module';


@NgModule({
  declarations: [
    HomeComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CityEventsModule,
    HttpClientModule,
    FlexLayoutModule,
    AppMaterialModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
