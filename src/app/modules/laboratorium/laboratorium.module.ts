import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboratoriumRoutingModule } from './laboratorium-routing.module';
import { LaboratoriumComponent } from './components/laboratorium/laboratorium.component';
import { RegistrasiModule } from '../registrasi/registrasi.module';
import { BillingModule } from '../billing/billing.module';
import { HasilLaboratoriumComponent } from './components/hasil-laboratorium/hasil-laboratorium.component';
import { SharedModule } from '../shared/shared.module';
import { TambahPemeriksaanComponent } from './components/tambah-pemeriksaan/tambah-pemeriksaan.component';


@NgModule({
  declarations: [
    LaboratoriumComponent,
    HasilLaboratoriumComponent,
    TambahPemeriksaanComponent
  ],
  imports: [
    CommonModule,
    LaboratoriumRoutingModule,
    RegistrasiModule,
    BillingModule,
    SharedModule
  ]
})
export class LaboratoriumModule { }
