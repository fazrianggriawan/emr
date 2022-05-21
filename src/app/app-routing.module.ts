import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'medical_record', loadChildren: () => import('./modules/medical-record/medical-record.module').then(m => m.MedicalRecordModule) },
    { path: 'registrasi', loadChildren: () => import('./modules/registrasi/registrasi.module').then(m => m.RegistrasiModule) },
    { path: 'rawatJalan', loadChildren: () => import('./modules/rawat-jalan/rawat-jalan.module').then(m => m.RawatJalanModule) }
    // { path: 'subjective', component: SubjectiveComponent },
    // { path: 'diagnosa_prosedur', component: DiagnosaComponent },
    // { path: 'plan', component: PlanComponent },
    // { path: 'pemeriksaan', component: PemeriksaanComponent },

    // { path: 'order', component: OrderComponent },
    // { path: 'form-order', component: FormOrderComponent },
    // { path: 'urologi', component: UrologiComponent },
    // { path: 'pasien', component: PasienComponent },
    // { path: 'cppt', component: CpptFormComponent },
    // { path: 'pengkajian_awal_medis', component: PengkajianAwalWatlanComponent },
    // { path: 'bukti_pelayanan_tindakan', component: BuktiPelayananTindakanComponent },
    // { path: 'hasil_usg_urologi', component: HasilUsgUrologiComponent },
    // { path: 'lap_bedah_anest_lokal', component: LaporanBedahAnestesiLokalComponent },
    // { path: 'lap_pemantauan_anest_lokal', component: LaporanPemantauanTindakanAnestLokalComponent },
    // { path: 'surat_masuk_perawatan', component: SuratMasukPerawatanComponent },
    // { path: 'pengajuan_pembedahaan', component: PengajuanPembedahaanComponent },
    // { path: 'objective/objective_note', component: ObjectiveNoteComponent },
    // { path: 'assessment/tindakan', component: TindakanComponent },
    // { path: 'planning/test_order', component: TestOrderComponent },
    // { path: 'planning/rawat_bersama', component: RawatBersamaComponent },
    // { path: 'summary_discharge/disposisi_pasien', component: DisposisiPasienComponent },
    // { path: 'summary_discharge/medical_resume', component: MedicalResumeComponent },
    // { path: 'konva', component: KonvaComponent },
    // { path: 'header', component: HeaderRegistrasiComponent, outlet: 'header' },
    // { path: 'tablet/farmasi', component: TabletFarmasiComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
