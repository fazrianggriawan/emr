import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrasiRoutingModule } from './registrasi-routing.module';
import { RegistrasiComponent } from './registrasi.component';
import { DataPasienComponent } from './components/data-pasien/data-pasien.component';
import { SharedModule } from '../shared/shared.module';
import { FormRawatJalanComponent } from './components/form-rawat-jalan/form-rawat-jalan.component';
import { DataRegistrasiComponent } from './components/data-registrasi/data-registrasi.component';
import { FormRegistrasiComponent } from './components/form-registrasi/form-registrasi.component';
import { WidgetRegistrasiComponent } from './components/widget-registrasi/widget-registrasi.component';

@NgModule({
    declarations: [
        RegistrasiComponent,
        DataPasienComponent,
        FormRawatJalanComponent,
        DataRegistrasiComponent,
        FormRegistrasiComponent,
        WidgetRegistrasiComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        RegistrasiRoutingModule
    ],
    exports: [
        DataRegistrasiComponent,
        FormRegistrasiComponent,
        WidgetRegistrasiComponent
    ]
})
export class RegistrasiModule { }
