import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EscolasModule } from './escolas/escolas.module';
import { HowIsGuard } from '../../shared/guards/how-is.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'escolas',
        loadChildren: () => import('./escolas/escolas.module').then(r => r.EscolasModule),
        canActivate: [HowIsGuard],
        canActivateChild: [HowIsGuard],
        canLoad: [HowIsGuard]
      },
      {
        path: 'turmas',
        loadChildren: () => import('./turmas/turmas.module').then(r => r.TurmasModule),
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
