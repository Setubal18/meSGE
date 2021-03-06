import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscolaComponent } from './escola.component';

const routes: Routes = [
  {
    path: '',
    component: EscolaComponent
  },
  {
    path: ':id',
    component: EscolaComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscolaRoutingModule { }
