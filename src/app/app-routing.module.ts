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
import { FormRadiologiComponent } from './components/forms/form-radiologi/form-radiologi.component';
import { FormLaboratoriumComponent } from './components/forms/form-laboratorium/form-laboratorium.component';
import { HeaderRegistrasiComponent } from './components/tpl/header-registrasi/header-registrasi.component';
import { FarmasiComponent } from './dialog/farmasi/farmasi.component';

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
  {path: 'online_prescription', component: FarmasiComponent},
  {path: 'radiologi', component: FormRadiologiComponent},
  {path: 'laboratorium', component: FormLaboratoriumComponent},
  {path: 'subjective/assessment_umum', component: CpptFormComponent},
  {path: 'header', component: HeaderRegistrasiComponent, outlet: 'header'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
