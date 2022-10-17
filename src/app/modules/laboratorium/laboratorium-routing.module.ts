import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaboratoriumComponent } from './components/laboratorium/laboratorium.component';

const routes: Routes = [
    { path: '', component: LaboratoriumComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoriumRoutingModule { }
