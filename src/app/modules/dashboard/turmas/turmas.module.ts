import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurmasRoutingModule } from './turmas-routing.module';
import { TurmasComponent } from './turmas.component';
import { IonicModule } from '@ionic/angular';
import { SearchbarModule } from 'src/app/shared/components/searchbar/searchbar.module';


@NgModule({
  declarations: [TurmasComponent],
  imports: [
    CommonModule,
    TurmasRoutingModule,
    IonicModule,
  ]
})
export class TurmasModule { }
