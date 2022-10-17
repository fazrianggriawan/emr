import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RawatJalanRoutingModule } from './rawat-jalan-routing.module';
import { RawatJalanComponent } from './rawat-jalan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RegistrasiModule } from '../registrasi/registrasi.module';
import { BillingModule } from '../billing/billing.module';

@NgModule({
    declarations: [
        RawatJalanComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        RawatJalanRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RegistrasiModule,
        BillingModule
    ]
})
export class RawatJalanModule { }
