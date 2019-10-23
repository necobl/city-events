import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./master/master.module').then(mod => mod.MasterModule),
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
