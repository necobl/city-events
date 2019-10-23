import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent
  },
  
  {
    path: 'events',
    component: EventsListComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
