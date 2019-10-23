import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AppMaterialModule } from '../app-material/app-material.module';


@NgModule({
  declarations: [UserContainerComponent, UserListComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    AppMaterialModule
  ]
})
export class UserModule { }
