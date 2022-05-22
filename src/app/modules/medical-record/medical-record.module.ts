import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRecordRoutingModule } from './medical-record-routing.module';
import { MedicalRecordComponent } from './medical-record.component';
import { FarmasiComponent } from './components/farmasi/farmasi.component';
import { DiagnosaProsedurComponent } from './components/diagnosa-prosedur/diagnosa-prosedur.component';
import { SummaryReviewComponent } from './components/summary-review/summary-review.component';
import { PlanningComponent } from './components/planning/planning.component';
import { SubjectiveComponent } from './components/subjective/subjective.component';
import { PemeriksaanComponent } from './components/pemeriksaan/pemeriksaan.component';
import { FormObatComponent } from './components/farmasi/form-obat/form-obat.component';
import { TableMasterObatComponent } from './components/farmasi/table-master-obat/table-master-obat.component';
import { TableOrderObatComponent } from './components/farmasi/table-order-obat/table-order-obat.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        MedicalRecordComponent,
        FarmasiComponent,
        SubjectiveComponent,
        PlanningComponent,
        DiagnosaProsedurComponent,
        SummaryReviewComponent,
        PemeriksaanComponent,
        FormObatComponent,
        TableMasterObatComponent,
        TableOrderObatComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        MedicalRecordRoutingModule
    ]
})
export class MedicalRecordModule { }
