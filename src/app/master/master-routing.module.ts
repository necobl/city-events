import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../auth/services/auth-guard.service';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
  /*{
    patch: 'admin',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
    canActivate: [AuthGuardService]
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
