import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { FormEmrComponent } from './emr/form-emr/form-emr.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { AddFormEmrComponent } from './emr/add-form-emr/add-form-emr.component';


@NgModule({
  declarations: [
    FormEmrComponent,
    HomeComponent,
    MenuComponent,
    AddFormEmrComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    SharedModule
  ]
})
export class SettingModule { }
