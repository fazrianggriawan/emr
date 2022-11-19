import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperasiComponent } from './components/operasi/operasi.component';

const routes: Routes = [
    { path: '', component: OperasiComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperasiRoutingModule { }
