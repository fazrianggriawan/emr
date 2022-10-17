import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadiologiRoutingModule } from './radiologi-routing.module';
import { RadiologiComponent } from './components/radiologi/radiologi.component';
import { RegistrasiModule } from '../registrasi/registrasi.module';
import { KasirModule } from '../kasir/kasir.module';
import { SharedModule } from '../shared/shared.module';
import { BillingModule } from '../billing/billing.module';
import { HasilRadiologiComponent } from './components/hasil-radiologi/hasil-radiologi.component';


@NgModule({
    declarations: [
        RadiologiComponent,
        HasilRadiologiComponent
    ],
    imports: [
        CommonModule,
        RadiologiRoutingModule,
        RegistrasiModule,
        KasirModule,
        BillingModule,
        SharedModule
    ]
})
export class RadiologiModule { }
