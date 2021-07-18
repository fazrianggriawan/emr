import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { MenubarModule } from "primeng/menubar";
import { MenuModule } from "primeng/menu";
import { DialogModule } from "primeng/dialog";
import { DtOrderComponent } from './components/dt-order/dt-order.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabViewModule } from "primeng/tabview";
import {InputTextareaModule} from 'primeng/inputtextarea';
import { OrderComponent } from './components/order/order.component';
import { DataViewModule } from "primeng/dataview";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { CheckboxModule } from "primeng/checkbox";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SidebarModule } from "primeng/sidebar";
import { DicomViewerModule } from 'ng-dicomviewer';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {EditorModule} from 'primeng/editor';
import {FileUploadModule} from 'primeng/fileupload';
import {TreeModule} from 'primeng/tree';
import {ChipsModule} from 'primeng/chips';
import {AccordionModule} from 'primeng/accordion';
import {TabMenuModule} from 'primeng/tabmenu';

import { FormOrderComponent } from './components/form-order/form-order.component';
import { LoginComponent } from './components/login/login.component';
import { UrologiComponent } from './components/urologi/urologi.component';
import { PasienComponent } from './components/pasien/pasien.component';
import { HttpClientModule } from '@angular/common/http';
import { InitialAvatarDirective } from './directives/initial-avatar.directive';
import { DateHumanDirective } from './directives/date-human.directive';
import { CpptFormComponent } from './components/forms/cppt-form/cppt-form.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule, DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PengkajianAwalWatlanComponent } from './components/forms/pengkajian-awal-watlan/pengkajian-awal-watlan.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import { BuktiPelayananTindakanComponent } from './components/forms/bukti-pelayanan-tindakan/bukti-pelayanan-tindakan.component';
import { HasilUsgUrologiComponent } from './components/forms/hasil-usg-urologi/hasil-usg-urologi.component';
import { LaporanBedahAnestesiLokalComponent } from './components/forms/laporan-bedah-anestesi-lokal/laporan-bedah-anestesi-lokal.component';
import { LaporanPemantauanTindakanAnestLokalComponent } from './components/forms/laporan-pemantauan-tindakan-anest-lokal/laporan-pemantauan-tindakan-anest-lokal.component';
import { SuratMasukPerawatanComponent } from './components/forms/surat-masuk-perawatan/surat-masuk-perawatan.component';
import { PengajuanPembedahaanComponent } from './components/forms/pengajuan-pembedahaan/pengajuan-pembedahaan.component';
import { EResepComponent } from './components/forms/e-resep/e-resep.component';
import { RegistrasiListComponent } from './components/registrasi-list/registrasi-list.component';
import { HeaderRegistrasiComponent } from './components/tpl/header-registrasi/header-registrasi.component';
import { MenuEmrComponent } from './components/tpl/menu-emr/menu-emr.component';
import { LeftMenuComponent } from './tpl/left-menu/left-menu.component';
import { ViewDataRegistrasiComponent } from './dialog/view-data-registrasi/view-data-registrasi.component';
import { LaboratoriumComponent } from './dialog/laboratorium/laboratorium.component';
import { RadiologiComponent } from './dialog/radiologi/radiologi.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FarmasiComponent } from './dialog/farmasi/farmasi.component';
import { FormRadiologiComponent } from './components/forms/form-radiologi/form-radiologi.component';
import { FormLaboratoriumComponent } from './components/forms/form-laboratorium/form-laboratorium.component';

@NgModule({
  declarations: [
    AppComponent,
    DtOrderComponent,
    OrderComponent,
    FormOrderComponent,
    LoginComponent,
    UrologiComponent,
    PasienComponent,
    InitialAvatarDirective,
    DateHumanDirective,
    CpptFormComponent,
    PengkajianAwalWatlanComponent,
    BuktiPelayananTindakanComponent,
    HasilUsgUrologiComponent,
    LaporanBedahAnestesiLokalComponent,
    LaporanPemantauanTindakanAnestLokalComponent,
    SuratMasukPerawatanComponent,
    PengajuanPembedahaanComponent,
    EResepComponent,
    RegistrasiListComponent,
    HeaderRegistrasiComponent,
    MenuEmrComponent,
    LeftMenuComponent,
    ViewDataRegistrasiComponent,
    LaboratoriumComponent,
    RadiologiComponent,
    FarmasiComponent,
    FormRadiologiComponent,
    FormLaboratoriumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    TableModule,
    EditorModule,
    BrowserAnimationsModule,
    MenubarModule,
    TabViewModule,
    DataViewModule,
    OverlayPanelModule,
    CheckboxModule,
    FormsModule,
    SidebarModule,
    MenuModule,
    DicomViewerModule,
    ScrollPanelModule,
    Ng2SearchPipeModule,
    DropdownModule,
    CalendarModule,
    ReactiveFormsModule,
    CommonModule,
    RadioButtonModule,
    SliderModule,
    InputTextareaModule,
    AutoCompleteModule,
    SelectButtonModule,
    FileUploadModule,
    TreeModule,
    ChipsModule,
    AccordionModule,
    TabMenuModule
  ],
  providers: [
    DatePipe,
   { provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
