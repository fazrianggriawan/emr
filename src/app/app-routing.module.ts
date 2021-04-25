import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { OrderComponent } from './components/order/order.component';
import { UrologiComponent } from './components/urologi/urologi.component';

const routes: Routes = [
  {path: 'order', component: OrderComponent},
  {path: 'form-order', component: FormOrderComponent},
  {path: 'urologi', component: UrologiComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
