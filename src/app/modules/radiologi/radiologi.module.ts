import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadiologiRoutingModule } from './radiologi-routing.module';
import { RadiologiComponent } from './components/radiologi/radiologi.component';
import { RegistrasiModule } from '../registrasi/registrasi.module';
import { KasirModule } from '../kasir/kasir.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        RadiologiComponent
    ],
    imports: [
        CommonModule,
        RadiologiRoutingModule,
        RegistrasiModule,
        KasirModule,
        SharedModule
    ]
})
export class RadiologiModule { }
