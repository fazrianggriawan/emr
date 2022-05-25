import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KasirComponent } from './kasir.component';

const routes: Routes = [{ path: '', component: KasirComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KasirRoutingModule { }
