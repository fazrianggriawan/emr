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
import { ScrollPanelModule } from 'primeng/scrollpanel';

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
    ScrollPanelModule
]

let sharedComponent = [
    VclaimComponent,
    NumpadComponent,
    NumpadRacikanComponent
]

@NgModule({
    declarations: [
        sharedComponent
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
