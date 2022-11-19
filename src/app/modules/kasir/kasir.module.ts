import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KasirRoutingModule } from './kasir-routing.module';
import { KasirComponent } from './kasir.component';
import { FormBillingComponent } from './components/form-billing/form-billing.component';
import { BillingComponent } from './components/billing/billing.component';
import { TarifComponent } from './components/tarif/tarif.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    KasirComponent,
    FormBillingComponent,
    BillingComponent,
    TarifComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    KasirRoutingModule
  ],
  exports: [
    TarifComponent,
    BillingComponent
  ]
})
export class KasirModule { }
