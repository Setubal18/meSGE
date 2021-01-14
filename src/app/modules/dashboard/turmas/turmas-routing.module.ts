import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurmasComponent } from './turmas.component';

const routes: Routes = [
  {
    path: '',
    component: TurmasComponent,
  },
  {
    path: 'turma',
    loadChildren: () => import('../turma/turma.module').then(r => r.TurmaModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmasRoutingModule { }
