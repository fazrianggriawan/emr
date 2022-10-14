import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { FarmasiComponent } from './farmasi.component';
import { TransaksiComponent } from './transaksi/transaksi.component';

const routes: Routes = [
    { path: '', component: FarmasiComponent },
    { path: 'transaksi', component: TransaksiComponent },
    { path: 'billing', component: BillingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmasiRoutingModule { }
