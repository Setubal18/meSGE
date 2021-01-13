import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscolaRoutingModule } from './escola-routing.module';
import { EscolaComponent } from './escola.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormIncrementalTurmasComponent } from 'src/app/shared/form-incremental-turmas/form-incremental-turmas.component';
import { FormIncrementalTurmasModule } from '../../../shared/form-incremental-turmas/form-incremental-turmas.module';


@NgModule({
  declarations: [EscolaComponent],
  imports: [
    IonicModule,
    CommonModule,
    EscolaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormIncrementalTurmasModule
  ]
})
export class EscolaModule { }
