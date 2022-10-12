import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuangRekamMedisRoutingModule } from './ruang-rekam-medis-routing.module';
import { RuangRekamMedisComponent } from './ruang-rekam-medis/ruang-rekam-medis.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RuangRekamMedisComponent
  ],
  imports: [
    CommonModule,
    RuangRekamMedisRoutingModule,
    SharedModule
  ]
})
export class RuangRekamMedisModule { }
