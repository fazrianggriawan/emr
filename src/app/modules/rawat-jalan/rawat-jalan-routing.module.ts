import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RawatJalanComponent } from './rawat-jalan.component';

const routes: Routes = [{ path: '', component: RawatJalanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RawatJalanRoutingModule { }
