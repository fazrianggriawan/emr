import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaporanRoutingModule } from './laporan-routing.module';
import { MenuLaporanComponent } from './components/menu-laporan/menu-laporan.component';
import { LaporanComponent } from './laporan/laporan.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ChartModule } from 'primeng/chart';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
    declarations: [
        MenuLaporanComponent,
        LaporanComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        LaporanRoutingModule,
        TieredMenuModule,
        SharedModule,
        ChartModule
    ]
})
export class LaporanModule { }
