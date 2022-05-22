import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrasiRoutingModule } from './registrasi-routing.module';
import { RegistrasiComponent } from './registrasi.component';
import { DataPasienComponent } from './components/data-pasien/data-pasien.component';
import { RikkesComponent } from 'src/app/components/rikkes/rikkes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        RegistrasiComponent,
        DataPasienComponent,
        RikkesComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        RegistrasiRoutingModule
    ]
})
export class RegistrasiModule { }
