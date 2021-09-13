import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { CpptFormComponent } from './components/forms/cppt-form/cppt-form.component';
import { OrderComponent } from './components/order/order.component';
import { UrologiComponent } from './components/urologi/urologi.component';
import { PengkajianAwalWatlanComponent } from "./components/forms/pengkajian-awal-watlan/pengkajian-awal-watlan.component";
import { BuktiPelayananTindakanComponent } from './components/forms/bukti-pelayanan-tindakan/bukti-pelayanan-tindakan.component';
import { HasilUsgUrologiComponent } from './components/forms/hasil-usg-urologi/hasil-usg-urologi.component';
import { LaporanBedahAnestesiLokalComponent } from './components/forms/laporan-bedah-anestesi-lokal/laporan-bedah-anestesi-lokal.component';
import { LaporanPemantauanTindakanAnestLokalComponent } from './components/forms/laporan-pemantauan-tindakan-anest-lokal/laporan-pemantauan-tindakan-anest-lokal.component';
import { SuratMasukPerawatanComponent } from './components/forms/surat-masuk-perawatan/surat-masuk-perawatan.component';
import { PengajuanPembedahaanComponent } from './components/forms/pengajuan-pembedahaan/pengajuan-pembedahaan.component';
import { EResepComponent } from './components/forms/e-resep/e-resep.component';
import { PasienComponent } from './components/pasien/pasien.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderRegistrasiComponent } from './components/tpl/header-registrasi/header-registrasi.component';
import { FarmasiComponent } from './dialog/farmasi/farmasi.component';
import { TestOrderComponent } from './components/planning/test-order/test-order.component';
import { RawatBersamaComponent } from './components/planning/rawat-bersama/rawat-bersama.component';
import { DiagnosaComponent } from './components/objective/diagnosa/diagnosa.component';
import { TindakanComponent } from './components/assessment/tindakan/tindakan.component';
import { DisposisiPasienComponent } from './components/summary-discharge/disposisi-pasien/disposisi-pasien.component';
import { MedicalResumeComponent } from './components/summary-discharge/medical-resume/medical-resume.component';
import { AssessmentUmumComponent } from './components/subjective/assessment-umum/assessment-umum.component';
import { ObjectiveNoteComponent } from './components/objective/objective-note/objective-note.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'order', component: OrderComponent},
  {path: 'form-order', component: FormOrderComponent},
  {path: 'urologi', component: UrologiComponent},
  {path: 'pasien', component: PasienComponent},
  {path: 'cppt', component: CpptFormComponent},
  {path: 'pengkajian_awal_medis', component: PengkajianAwalWatlanComponent},
  {path: 'bukti_pelayanan_tindakan', component: BuktiPelayananTindakanComponent},
  {path: 'hasil_usg_urologi', component: HasilUsgUrologiComponent},
  {path: 'lap_bedah_anest_lokal', component: LaporanBedahAnestesiLokalComponent},
  {path: 'lap_pemantauan_anest_lokal', component: LaporanPemantauanTindakanAnestLokalComponent},
  {path: 'surat_masuk_perawatan', component: SuratMasukPerawatanComponent},
  {path: 'pengajuan_pembedahaan', component: PengajuanPembedahaanComponent},
  {path: 'farmasi', component: FarmasiComponent},
  {path: 'subjective/assessment_umum', component: AssessmentUmumComponent},
  {path: 'objective/diagnosa', component: DiagnosaComponent},
  {path: 'objective/objective_note', component: ObjectiveNoteComponent},
  {path: 'assessment/tindakan', component: TindakanComponent},
  {path: 'planning/test_order', component: TestOrderComponent},
  {path: 'planning/rawat_bersama', component: RawatBersamaComponent},
  {path: 'summary_discharge/disposisi_pasien', component: DisposisiPasienComponent},
  {path: 'summary_discharge/medical_resume', component: MedicalResumeComponent},
  {path: 'header', component: HeaderRegistrasiComponent, outlet: 'header'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
