import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadiologiRoutingModule } from './radiologi-routing.module';
import { RadiologiComponent } from './components/radiologi/radiologi.component';
import { RegistrasiModule } from '../registrasi/registrasi.module';
import { KasirModule } from '../kasir/kasir.module';
import { SharedModule } from '../shared/shared.module';
import { BillingModule } from '../billing/billing.module';
import { HasilRadiologiComponent } from './components/hasil-radiologi/hasil-radiologi.component';
import { TambahTindakanComponent } from './components/tambah-tindakan/tambah-tindakan.component';
import { CariTindakanComponent } from './components/cari-tindakan/cari-tindakan.component';


@NgModule({
    declarations: [
        RadiologiComponent,
        HasilRadiologiComponent,
        TambahTindakanComponent,
        CariTindakanComponent
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
