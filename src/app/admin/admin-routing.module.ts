import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventsListComponent} from '../city-events/events-list/events-list.component';
import {CategoriesListComponent} from '../city-events-category/categories-list/categories-list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EventsListComponent
      },
      {
        path: 'categories',
        component: CategoriesListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule {
}


