import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VclaimComponent } from './vclaim/vclaim.component';

const routes: Routes = [
    { path: '', component: VclaimComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VclaimRoutingModule { }
