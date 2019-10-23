import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master.component';
import {MasterRoutingModule} from './master-routing.module';
import {AppMaterialModule} from '../app-material/app-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [MasterComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterModule { }
