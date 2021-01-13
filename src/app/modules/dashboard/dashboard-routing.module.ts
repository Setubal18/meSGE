import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EscolasModule } from './escolas/escolas.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'escolas',
        loadChildren: () => import('./escolas/escolas.module').then(r => r.EscolasModule)
      },
      {
        path: '',
        redirectTo: 'escolas',
        pathMatch: 'full'
      }]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'escolas',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
