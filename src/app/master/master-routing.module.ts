import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from '../auth/services/auth-guard.service';
import {HomeComponent} from '../home/home.component';
import {MasterComponent} from './master.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'admin',
        loadChildren: () => import('../admin/admin.module').then(mod => mod.AdminModule),
        // canActivate: [AuthGuardService]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {
}
