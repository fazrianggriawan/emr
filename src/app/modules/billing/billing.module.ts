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
import { CariTarifComponent } from './components/cari-tarif/cari-tarif.component';
import { JasaPelaksanaComponent } from './components/jasa-pelaksana/jasa-pelaksana.component';
import { TambahBillingComponent } from './components/tambah-billing/tambah-billing.component';
import { DataBillingComponent } from './components/data-billing/data-billing.component';

@NgModule({
    declarations: [
        BillingComponent,
        TarifComponent,
        DynamicFormQuestionComponent,
        DynamicFormComponent,
        CariTarifComponent,
        JasaPelaksanaComponent,
        TambahBillingComponent,
        DataBillingComponent
    ],
    imports: [
        CommonModule,
        BillingRoutingModule,
        SharedModule,
        RegistrasiModule
    ],
    exports: [
        BillingComponent,
        TarifComponent,
        DynamicFormComponent,
        CariTarifComponent,
        TambahBillingComponent,
        DataBillingComponent
    ]
})
export class BillingModule { }
