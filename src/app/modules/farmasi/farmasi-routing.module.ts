import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './components/billing/billing.component';
import { FarmasiComponent } from './components/farmasi/farmasi.component';
import { StokOpnameComponent } from './components/stok-opname/stok-opname.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { TransaksiComponent } from './components/transaksi/transaksi.component';

const routes: Routes = [
    { path: '', component: FarmasiComponent },
    { path: 'transaksi', component: TransaksiComponent },
    { path: 'billing', component: BillingComponent },
    { path: 'supplier', component: SupplierComponent },
    { path: 'stock-opname', component: StokOpnameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmasiRoutingModule { }
