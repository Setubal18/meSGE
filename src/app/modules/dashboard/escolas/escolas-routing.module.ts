import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscolasComponent } from './escolas.component';
import { EscolaComponent } from '../escola/escola.component';

const routes: Routes = [
  {
    path: '',
    component: EscolasComponent,
  },
  {
    path: 'escola',
    loadChildren: () => import('../escola/escola.module').then(r => r.EscolaModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscolasRoutingModule { }
