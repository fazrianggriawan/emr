import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RikkesComponent } from './components/rikkes/rikkes.component';
import { VclaimComponent } from './modules/shared/vclaim/vclaim.component';
import { LoginComponent } from './templates/login/login.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'rikkes', component: RikkesComponent },
    { path: 'vclaim', component: VclaimComponent },
    { path: 'medicalRecord', loadChildren: () => import('./modules/medical-record/medical-record.module').then(m => m.MedicalRecordModule) },
    { path: 'registrasi', loadChildren: () => import('./modules/registrasi/registrasi.module').then(m => m.RegistrasiModule) },
    { path: 'rawatJalan', loadChildren: () => import('./modules/rawat-jalan/rawat-jalan.module').then(m => m.RawatJalanModule) },
    { path: 'kasir', loadChildren: () => import('./modules/kasir/kasir.module').then(m => m.KasirModule) },
    { path: 'farmasi', loadChildren: () => import('./modules/farmasi/farmasi.module').then(m => m.FarmasiModule) },
    { path: 'radiologi', loadChildren: () => import('./modules/radiologi/radiologi.module').then(m => m.RadiologiModule) },
    { path: 'laporan', loadChildren: () => import('./modules/laporan/laporan.module').then(m => m.LaporanModule) },
    { path: 'ruangRekamMedis', loadChildren: () => import('./modules/ruang-rekam-medis/ruang-rekam-medis.module').then(m => m.RuangRekamMedisModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
