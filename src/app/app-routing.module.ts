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
    { path: 'kasir', loadChildren: () => import('./modules/kasir/kasir.module').then(m => m.KasirModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
