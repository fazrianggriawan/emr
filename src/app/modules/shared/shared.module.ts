import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VclaimComponent } from './vclaim/vclaim.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabViewModule } from 'primeng/tabview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NumpadComponent } from 'src/app/modules/shared/numpad/numpad.component';
import { NumpadRacikanComponent } from './numpad-racikan/numpad-racikan.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FormSuratKontrolComponent } from './vclaim/surat-kontrol/form-surat-kontrol/form-surat-kontrol.component';
import { FormPrbComponent } from './vclaim/prb/form-prb/form-prb.component';
import { SuratKontrolComponent } from './vclaim/surat-kontrol/surat-kontrol.component';
import { PrbComponent } from './vclaim/prb/prb.component';
import { RujukanComponent } from './vclaim/rujukan/rujukan.component';
import { HistoryComponent } from './vclaim/history/history.component';
import { FormRujukanKeluarComponent } from './vclaim/rujukan/form-rujukan-keluar/form-rujukan-keluar.component';
import { PulangSepComponent } from './vclaim/pulang-sep/pulang-sep.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ImageModule } from 'primeng/image';
import { EditorModule } from 'primeng/editor';
import { MenubarModule } from 'primeng/menubar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormPasienPulangComponent } from './vclaim/history/form-pasien-pulang/form-pasien-pulang.component';



let primeModules = [
    DropdownModule,
    InputTextareaModule,
    RadioButtonModule,
    CalendarModule,
    DialogModule,
    TableModule,
    InputMaskModule,
    SelectButtonModule,
    TabViewModule,
    AutoCompleteModule,
    MenuModule,
    OverlayPanelModule,
    ProgressSpinnerModule,
    CheckboxModule,
    ScrollPanelModule,
    ProgressBarModule,
    ToastModule,
    ImageModule,
    EditorModule,
    MenubarModule,
    ConfirmDialogModule
]

let sharedComponent = [
    VclaimComponent,
    NumpadComponent,
    NumpadRacikanComponent,
    FormSuratKontrolComponent,
    FormPrbComponent,
    PrbComponent,
    RujukanComponent,
    HistoryComponent,
    SuratKontrolComponent,
    FormRujukanKeluarComponent,
]

@NgModule({
    declarations: [
        sharedComponent,
        PulangSepComponent,
        FormPasienPulangComponent
    ],
    imports: [
        primeModules,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        sharedComponent,
        primeModules,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class SharedModule { }
