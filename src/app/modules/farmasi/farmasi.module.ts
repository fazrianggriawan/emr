import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmasiRoutingModule } from './farmasi-routing.module';
import { FarmasiComponent } from './farmasi.component';


@NgModule({
  declarations: [
    FarmasiComponent
  ],
  imports: [
    CommonModule,
    FarmasiRoutingModule
  ]
})
export class FarmasiModule { }
