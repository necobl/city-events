import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent,
    children: [
      {
        path: '',
        component: UserListComponent
      },
      {
        path: 'list',
        component: UserListComponent
      },
      {
        path: 'details',
        component: UserDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
