import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRecordRoutingModule } from './medical-record-routing.module';
import { MedicalRecordComponent } from './medical-record.component';
import { FarmasiComponent } from './components/farmasi/farmasi.component';
import { DiagnosaProsedurComponent } from './components/diagnosa-prosedur/diagnosa-prosedur.component';
import { SummaryReviewComponent } from './components/summary-review/summary-review.component';
import { PlanningComponent } from './components/planning/planning.component';
import { SubjectiveComponent } from './components/subjective/subjective.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PemeriksaanComponent } from './components/pemeriksaan/pemeriksaan.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormObatComponent } from './components/farmasi/form-obat/form-obat.component';
import { TableMasterObatComponent } from './components/farmasi/table-master-obat/table-master-obat.component';
import { TableOrderObatComponent } from './components/farmasi/table-order-obat/table-order-obat.component';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { NumpadComponent } from 'src/app/components/shared/numpad/numpad.component';
import { NumpadRacikanComponent } from 'src/app/components/shared/numpad-racikan/numpad-racikan.component';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';

let primeModules : any = [
    InputTextareaModule,
    CheckboxModule,
    ScrollPanelModule,
    DropdownModule,
    RadioButtonModule,
    TableModule,
    TabViewModule,
    DialogModule,
    OverlayPanelModule,
    AutoCompleteModule,
    CalendarModule
];

@NgModule({
    declarations: [
        MedicalRecordComponent,
        FarmasiComponent,
        SubjectiveComponent,
        PlanningComponent,
        DiagnosaProsedurComponent,
        SummaryReviewComponent,
        PemeriksaanComponent,
        FormObatComponent,
        TableMasterObatComponent,
        TableOrderObatComponent,
        NumpadComponent,
        NumpadRacikanComponent
    ],
    imports: [
        primeModules,
        CommonModule,
        MedicalRecordRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class MedicalRecordModule { }
