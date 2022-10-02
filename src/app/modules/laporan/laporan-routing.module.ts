import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaporanComponent } from './laporan/laporan.component';

const routes: Routes = [
    { path: '', component: LaporanComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaporanRoutingModule { }
