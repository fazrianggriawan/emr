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
import { SharedModule } from '../shared/shared.module';
import { LaboratoriumComponent } from './components/laboratorium/laboratorium.component';
import { RadiologiComponent } from './components/radiologi/radiologi.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { KonsulComponent } from './components/konsul/konsul.component';
import { CpptComponent } from './components/cppt/cppt.component';

@NgModule({
    declarations: [
        MedicalRecordComponent,
        FarmasiComponent,
        SubjectiveComponent,
        PlanningComponent,
        DiagnosaProsedurComponent,
        SummaryReviewComponent,
        PemeriksaanComponent,
        LaboratoriumComponent,
        RadiologiComponent,
        FileUploadComponent,
        KonsulComponent,
        CpptComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        MedicalRecordRoutingModule
    ]
})
export class MedicalRecordModule {}
