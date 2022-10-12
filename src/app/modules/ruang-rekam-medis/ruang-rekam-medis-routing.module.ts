import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuangRekamMedisComponent } from './ruang-rekam-medis/ruang-rekam-medis.component';

const routes: Routes = [
    { path: '', component: RuangRekamMedisComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuangRekamMedisRoutingModule { }
