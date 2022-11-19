import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EKlaimRoutingModule } from './e-klaim-routing.module';
import { EKlaimComponent } from './components/e-klaim/e-klaim.component';
import { RegistrasiModule } from '../registrasi/registrasi.module';
import { VclaimModule } from '../vclaim/vclaim.module';
import { SharedModule } from '../shared/shared.module';
import { CariIcd10Component } from './components/cari-icd10/cari-icd10.component';
import { CariIcd9Component } from './components/cari-icd9/cari-icd9.component';
import { KasirModule } from '../kasir/kasir.module';


@NgModule({
  declarations: [
    EKlaimComponent,
    CariIcd10Component,
    CariIcd9Component
  ],
  imports: [
    CommonModule,
    EKlaimRoutingModule,
    RegistrasiModule,
    VclaimModule,
    SharedModule,
    KasirModule
  ]
})
export class EKlaimModule { }
