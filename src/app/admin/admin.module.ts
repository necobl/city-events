import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppMaterialModule} from '../app-material/app-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CityEventsModule} from '../city-events/city-events.module';
import {CityEventsCategoryModule} from '../city-events-category/city-events-category.module';
import {AdminRoutingModule} from './admin-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CityEventsModule,
    CityEventsCategoryModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
