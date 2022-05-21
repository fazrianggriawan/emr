import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrasiRoutingModule } from './registrasi-routing.module';
import { RegistrasiComponent } from './registrasi.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DataPasienComponent } from './components/dialog/data-pasien/data-pasien.component';
import { TableModule } from 'primeng/table';
import { InputMaskModule } from 'primeng/inputmask';
import { DataPesertaBpjsComponent } from './components/dialog/data-peserta-bpjs/data-peserta-bpjs.component';
import { RikkesComponent } from 'src/app/components/rikkes/rikkes.component';
import { SelectButtonModule } from 'primeng/selectbutton';

let primeModules = [
    DropdownModule,
    InputTextareaModule,
    RadioButtonModule,
    CalendarModule,
    DialogModule,
    TableModule,
    InputMaskModule,
    SelectButtonModule

]

@NgModule({
    declarations: [
        RegistrasiComponent,
        DataPasienComponent,
        DataPesertaBpjsComponent,
        RikkesComponent
    ],
    imports: [
        primeModules,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RegistrasiRoutingModule
    ]
})
export class RegistrasiModule { }
