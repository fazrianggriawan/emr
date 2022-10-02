import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadiologiComponent } from './components/radiologi/radiologi.component';

const routes: Routes = [
    { path: '', component: RadiologiComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadiologiRoutingModule { }
