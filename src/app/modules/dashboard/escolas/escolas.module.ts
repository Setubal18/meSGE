import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscolasRoutingModule } from './escolas-routing.module';
import { EscolasComponent } from './escolas.component';
import { IonicModule } from '@ionic/angular';
import { SearchbarModule } from 'src/app/shared/components/searchbar/searchbar.module';


@NgModule({
  declarations: [EscolasComponent],
  imports: [
    CommonModule,
    IonicModule,
    EscolasRoutingModule,
    SearchbarModule
  ]
})
export class EscolasModule { }
