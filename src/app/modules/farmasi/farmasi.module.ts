import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmasiRoutingModule } from './farmasi-routing.module';
import { FarmasiComponent } from './farmasi.component';
import { TransaksiComponent } from './transaksi/transaksi.component';
import { SharedModule } from '../shared/shared.module';
import { BillingComponent } from './billing/billing.component';
import { RegistrasiModule } from '../registrasi/registrasi.module';


@NgModule({
  declarations: [
    FarmasiComponent,
    TransaksiComponent,
    BillingComponent
  ],
  imports: [
    CommonModule,
    FarmasiRoutingModule,
    SharedModule,
    RegistrasiModule
  ]
})
export class FarmasiModule { }
