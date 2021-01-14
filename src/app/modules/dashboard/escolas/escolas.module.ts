import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscolasRoutingModule } from './escolas-routing.module';
import { EscolasComponent } from './escolas.component';


@NgModule({
  declarations: [EscolasComponent],
  imports: [
    CommonModule,
    EscolasRoutingModule
  ]
})
export class EscolasModule { }
