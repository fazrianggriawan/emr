import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosaProsedurComponent } from './components/diagnosa-prosedur/diagnosa-prosedur.component';
import { FarmasiComponent } from './components/farmasi/farmasi.component';
import { PemeriksaanComponent } from './components/pemeriksaan/pemeriksaan.component';
import { PlanningComponent } from './components/planning/planning.component';
import { SubjectiveComponent } from './components/subjective/subjective.component';
import { MedicalRecordComponent } from './medical-record.component';

const routes: Routes = [
    { path: '', component: MedicalRecordComponent },
    { path: 'subjective', component: SubjectiveComponent },
    { path: 'pemeriksaan', component: PemeriksaanComponent },
    { path: 'diagnosa_prosedur', component: DiagnosaProsedurComponent },
    { path: 'farmasi', component: FarmasiComponent },
    { path: 'planning', component: PlanningComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRecordRoutingModule { }
