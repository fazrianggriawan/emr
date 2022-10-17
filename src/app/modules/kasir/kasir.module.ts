import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KasirRoutingModule } from './kasir-routing.module';
import { KasirComponent } from './kasir.component';
import { SharedModule } from '../shared/shared.module';
import { BillingModule } from '../billing/billing.module';


@NgModule({
  declarations: [
    KasirComponent
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
