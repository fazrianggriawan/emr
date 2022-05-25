import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmasiComponent } from './farmasi.component';

const routes: Routes = [{ path: '', component: FarmasiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmasiRoutingModule { }
