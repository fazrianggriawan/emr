import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataRegistrasiComponent } from './components/data-registrasi/data-registrasi.component';
import { RegistrasiComponent } from './registrasi.component';

const routes: Routes = [
    { path: '', component: RegistrasiComponent },
    { path: 'data-registrasi', component: DataRegistrasiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrasiRoutingModule { }
