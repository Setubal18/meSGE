import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurmaRoutingModule } from './turma-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormIncrementalTurmasModule } from 'src/app/shared/components/form-incremental-turmas/form-incremental-turmas.module';
import { TurmaComponent } from './turma.component';


@NgModule({
  declarations: [TurmaComponent],
  imports: [
    CommonModule,
    TurmaRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    FormIncrementalTurmasModule
  ]
})
export class TurmaModule { }
