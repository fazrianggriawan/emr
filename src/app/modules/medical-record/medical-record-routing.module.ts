import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KonvaComponent } from 'src/app/components/konva/konva.component';
import { CpptComponent } from './components/cppt/cppt.component';
import { DiagnosaProsedurComponent } from './components/diagnosa-prosedur/diagnosa-prosedur.component';
import { FarmasiComponent } from './components/farmasi/farmasi.component';
import { KonsulComponent } from './components/konsul/konsul.component';
import { LaboratoriumComponent } from './components/laboratorium/laboratorium.component';
import { PemeriksaanComponent } from './components/pemeriksaan/pemeriksaan.component';
import { PlanningComponent } from './components/planning/planning.component';
import { RadiologiComponent } from './components/radiologi/radiologi.component';
import { ResumeMedisComponent } from './components/resume-medis/resume-medis.component';
import { MedicalRecordComponent } from './medical-record.component';

const routes: Routes = [
    { path: '', component: MedicalRecordComponent },
    { path: 'cppt', component: CpptComponent },
    { path: 'pemeriksaan', component: PemeriksaanComponent },
    { path: 'diagnosa_prosedur', component: DiagnosaProsedurComponent },
    { path: 'farmasi', component: FarmasiComponent },
    { path: 'planning', component: PlanningComponent },
    { path: 'radiologi', component: RadiologiComponent },
    { path: 'laboratorium', component: LaboratoriumComponent },
    { path: 'konsul', component: KonsulComponent },
    { path: 'konva', component: KonvaComponent },
    { path: 'resume_medis', component: ResumeMedisComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRecordRoutingModule { }
