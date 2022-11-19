import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EKlaimComponent } from './components/e-klaim/e-klaim.component';

const routes: Routes = [
    { path: '', component: EKlaimComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EKlaimRoutingModule { }
