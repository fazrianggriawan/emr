import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VclaimRoutingModule } from './vclaim-routing.module';
import { DataRujukanComponent } from './components/rujukan/data-rujukan/data-rujukan.component';
import { VclaimComponent } from './vclaim/vclaim.component';
import { PesertaComponent } from './components/peserta/peserta.component';
import { DataSepComponent } from './components/sep/data-sep/data-sep.component';
import { SharedModule } from '../shared/shared.module';
import { formSepComponent } from './components/sep/form-sep/form-sep.component';
import { SuratKontrolComponent } from './components/surat-kontrol/surat-kontrol/surat-kontrol.component';
import { DataSuratKontrolComponent } from './components/surat-kontrol/data-surat-kontrol/data-surat-kontrol.component';
import { FormSuratKontrolComponent } from './components/surat-kontrol/form-surat-kontrol/form-surat-kontrol.component';
import { DataPrbComponent } from './components/prb/data-prb/data-prb.component';
import { RujukanComponent } from './components/rujukan/rujukan/rujukan.component';
import { FormRujukanComponent } from './components/rujukan/form-rujukan/form-rujukan.component';
import { DataRujukanKeluarComponent } from './components/rujukan/data-rujukan-keluar/data-rujukan-keluar.component';
import { SepComponent } from './components/sep/sep/sep.component';


@NgModule({
  declarations: [
    DataRujukanComponent,
    VclaimComponent,
    PesertaComponent,
    formSepComponent,
    DataSepComponent,
    SuratKontrolComponent,
    DataSuratKontrolComponent,
    FormSuratKontrolComponent,
    DataPrbComponent,
    RujukanComponent,
    FormRujukanComponent,
    DataRujukanKeluarComponent,
    SepComponent
  ],
  imports: [
    CommonModule,
    VclaimRoutingModule,
    SharedModule
  ],
  exports: [
    VclaimComponent,
    DataSepComponent
  ]
})
export class VclaimModule { }
