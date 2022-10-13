import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEmrComponent } from './emr/form-emr/form-emr.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'form-emr', component: FormEmrComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
