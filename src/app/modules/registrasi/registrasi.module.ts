import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrasiRoutingModule } from './registrasi-routing.module';
import { RegistrasiComponent } from './registrasi.component';
import { DataPasienComponent } from './components/data-pasien/data-pasien.component';
import { SharedModule } from '../shared/shared.module';
import { FormRawatJalanComponent } from './components/form-rawat-jalan/form-rawat-jalan.component';

@NgModule({
    declarations: [
        RegistrasiComponent,
        DataPasienComponent,
        FormRawatJalanComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        RegistrasiRoutingModule
    ],
    exports: [
        SharedModule
    ]
})
export class RegistrasiModule { }
