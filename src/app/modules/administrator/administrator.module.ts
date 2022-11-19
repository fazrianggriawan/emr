import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { TarifComponent } from './components/tarif/tarif.component';
import { SharedModule } from '../shared/shared.module';
import { NamaTarifComponent } from './components/tarif/nama-tarif/nama-tarif.component';
import { HargaTarifComponent } from './components/tarif/harga-tarif/harga-tarif.component';
import { JasaTarifComponent } from './components/tarif/jasa-tarif/jasa-tarif.component';
import { CategoryTarifComponent } from './components/tarif/category-tarif/category-tarif.component';
import { DetailTarifComponent } from './components/tarif/detail-tarif/detail-tarif.component';


@NgModule({
  declarations: [
    TarifComponent,
    NamaTarifComponent,
    HargaTarifComponent,
    JasaTarifComponent,
    CategoryTarifComponent,
    DetailTarifComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    SharedModule
  ]
})
export class AdministratorModule { }
