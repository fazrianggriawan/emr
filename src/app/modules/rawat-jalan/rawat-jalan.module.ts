import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RawatJalanRoutingModule } from './rawat-jalan-routing.module';
import { RawatJalanComponent } from './rawat-jalan.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { VclaimComponent } from 'src/app/components/dialog/vclaim/vclaim.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MenuModule } from 'primeng/menu';
import { FormBillingComponent } from 'src/app/components/dialog/form-billing/form-billing.component';

let primeModules = [
    DropdownModule,
    InputTextareaModule,
    RadioButtonModule,
    CalendarModule,
    DialogModule,
    TableModule,
    TabViewModule,
    AutoCompleteModule,
    MenuModule
]

@NgModule({
    declarations: [
        RawatJalanComponent,
        VclaimComponent,
        FormBillingComponent
    ],
    imports: [
        primeModules,
        CommonModule,
        RawatJalanRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class RawatJalanModule { }
