import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KasirRoutingModule } from './kasir-routing.module';
import { KasirComponent } from './kasir.component';
import { FormBillingComponent } from './components/form-billing/form-billing.component';
import { BillingComponent } from './components/billing/billing.component';


@NgModule({
  declarations: [
    KasirComponent,
    FormBillingComponent,
    BillingComponent
  ],
  imports: [
    CommonModule,
    KasirRoutingModule
  ]
})
export class KasirModule { }
