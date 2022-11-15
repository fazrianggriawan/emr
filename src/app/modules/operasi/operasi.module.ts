import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperasiRoutingModule } from './operasi-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegistrasiModule } from '../registrasi/registrasi.module';
import { BillingModule } from '../billing/billing.module';
import { DataBillingOperasiComponent } from './components/data-billing-operasi/data-billing-operasi.component';
import { HitungTarifComponent } from './components/hitung-tarif/hitung-tarif.component';
import { OperasiComponent } from './components/operasi/operasi.component';
import { TambahBillingOperasiComponent } from './components/tambah-billing-operasi/tambah-billing-operasi.component';


@NgModule({
  declarations: [
    DataBillingOperasiComponent,
    HitungTarifComponent,
    OperasiComponent,
    TambahBillingOperasiComponent
  ],
  imports: [
    CommonModule,
    OperasiRoutingModule,
    RegistrasiModule,
    BillingModule,
    SharedModule
  ]
})
export class OperasiModule { }
