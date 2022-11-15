import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KasirRoutingModule } from './kasir-routing.module';
import { KasirComponent } from './kasir.component';
import { SharedModule } from '../shared/shared.module';
import { BillingModule } from '../billing/billing.module';
import { LaporanTransaksiBillingComponent } from './components/laporan/laporan-transaksi-billing/laporan-transaksi-billing.component';


@NgModule({
  declarations: [
    KasirComponent,
    LaporanTransaksiBillingComponent
  ],
  imports: [
    CommonModule,
    KasirRoutingModule,
    SharedModule,
    BillingModule
  ],
  exports: []
})
export class KasirModule { }
