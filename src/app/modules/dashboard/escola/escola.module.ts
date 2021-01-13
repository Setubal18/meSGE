import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscolaRoutingModule } from './escola-routing.module';
import { EscolaComponent } from './escola.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EscolaComponent],
  imports: [
    IonicModule,
    CommonModule,
    EscolaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EscolaModule { }
