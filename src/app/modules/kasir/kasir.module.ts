import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KasirRoutingModule } from './kasir-routing.module';
import { KasirComponent } from './kasir.component';
import { FormBillingComponent } from './components/form-billing/form-billing.component';
import { BillingComponent } from './components/billing/billing.component';
import { TarifComponent } from './components/tarif/tarif.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormQuestionComponent } from './components/tarif/dynamic-form/dynamic-form-question.component';
import { DynamicFormComponent } from './components/tarif/dynamic-form/dynamic-form.component';


@NgModule({
  declarations: [
    KasirComponent,
    FormBillingComponent,
    BillingComponent,
    TarifComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
  ],
  imports: [
    CommonModule,
    KasirRoutingModule,
    SharedModule
  ],
  exports: [
    TarifComponent,
    BillingComponent
  ]
})
export class KasirModule { }
