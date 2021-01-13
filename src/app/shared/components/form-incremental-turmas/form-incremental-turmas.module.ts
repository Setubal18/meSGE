import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormIncrementalTurmasComponent } from './form-incremental-turmas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [FormIncrementalTurmasComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormIncrementalTurmasComponent
  ]
})
export class FormIncrementalTurmasModule { }
