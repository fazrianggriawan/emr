import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmasiRoutingModule } from './farmasi-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegistrasiModule } from '../registrasi/registrasi.module';
import { FarmasiComponent } from './components/farmasi/farmasi.component';
import { TransaksiComponent } from './components/transaksi/transaksi.component';
import { BillingComponent } from './components/billing/billing.component';
import { WidgetSubmenuFarmasiComponent } from './components/widget-submenu-farmasi/widget-submenu-farmasi.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { StokOpnameComponent } from './components/stok-opname/stok-opname.component';
import { DataStokComponent } from './components/stok-opname/data-stok/data-stok.component';
import { CariObatComponent } from './components/cari-obat/cari-obat.component';


@NgModule({
  declarations: [
    FarmasiComponent,
    TransaksiComponent,
    BillingComponent,
    WidgetSubmenuFarmasiComponent,
    SupplierComponent,
    StokOpnameComponent,
    DataStokComponent,
    CariObatComponent
  ],
  imports: [
    CommonModule,
    FarmasiRoutingModule,
    SharedModule,
    RegistrasiModule
  ],
  exports: [
    WidgetSubmenuFarmasiComponent
  ]
})
export class FarmasiModule { }
