import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarifComponent } from './components/tarif/tarif.component';

const routes: Routes = [
    { path: 'tarif', component: TarifComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministratorRoutingModule { }
