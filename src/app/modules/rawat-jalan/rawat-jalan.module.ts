import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RawatJalanRoutingModule } from './rawat-jalan-routing.module';
import { RawatJalanComponent } from './rawat-jalan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBillingComponent } from 'src/app/components/dialog/form-billing/form-billing.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        RawatJalanComponent,
        FormBillingComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        RawatJalanRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class RawatJalanModule { }
