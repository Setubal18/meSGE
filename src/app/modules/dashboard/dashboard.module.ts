import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { IonicModule } from '@ionic/angular';
import { FormIncrementalTurmasComponent } from '../../shared/form-incremental-turmas/form-incremental-turmas.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    IonicModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
