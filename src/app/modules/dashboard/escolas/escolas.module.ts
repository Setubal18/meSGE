import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscolasRoutingModule } from './escolas-routing.module';
import { EscolasComponent } from './escolas.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [EscolasComponent],
  imports: [
    CommonModule,
    IonicModule,
    EscolasRoutingModule
  ]
})
export class EscolasModule { }
