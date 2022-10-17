import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import { SharedModule } from '../shared/shared.module';
import { BillingRoutingModule } from './billing-routing.module';
import { KasirModule } from '../kasir/kasir.module';
import { RegistrasiModule } from '../registrasi/registrasi.module';
import { TarifComponent } from './tarif/tarif.component';
import { DynamicFormQuestionComponent } from './tarif/dynamic-form/dynamic-form-question.component';
import { DynamicFormComponent } from './tarif/dynamic-form/dynamic-form.component';

@NgModule({
    declarations: [
        BillingComponent,
        TarifComponent,
        DynamicFormQuestionComponent,
        DynamicFormComponent
    ],
    imports: [
        CommonModule,
        BillingRoutingModule,
        SharedModule,
        RegistrasiModule
    ],
    exports: [
        BillingComponent,
        TarifComponent
    ]
})
export class BillingModule { }
