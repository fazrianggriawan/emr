import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DicomViewerModule } from 'ng-dicomviewer';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule, DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UserComponent } from './templates/user/user.component';
import { CalendarComponent } from './templates/calendar/calendar.component';
import { MenuComponent } from './templates/menu/menu.component';
import { LoginComponent } from './templates/login/login.component';
import { DEFAULT_TIMEOUT, HttpProvider } from './providers/http.interceptor';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DataPesertaComponent } from './components/rikkes/data-peserta/data-peserta.component';
import { UploadFileComponent } from './components/rikkes/upload-file/upload-file.component';
import { RikkesComponent } from './components/rikkes/rikkes.component';
import { SharedModule } from './modules/shared/shared.module';
import { FileUploadModule } from 'primeng/fileupload';
import { RadiologiComponent } from './components/rikkes/radiologi/radiologi.component';
import { LaboratoriumComponent } from './components/rikkes/laboratorium/laboratorium.component';
import { RegistrasiModule } from './modules/registrasi/registrasi.module';
import { RadiologiModule } from './modules/radiologi/radiologi.module';
import { LaporanModule } from './modules/laporan/laporan.module';
import { EKlaimModule } from './modules/e-klaim/e-klaim.module';
import { RuangRekamMedisModule } from './modules/ruang-rekam-medis/ruang-rekam-medis.module';
import { HomeComponent } from './components/home/home.component';
import { SettingModule } from './modules/setting/setting.module';
import { LeftPanelComponent } from './template/left-panel/left-panel.component';
import { TopPanelComponent } from './template/top-panel/top-panel.component';
import { RightPanelComponent } from './template/right-panel/right-panel.component';
import { MainPanelComponent } from './template/main-panel/main-panel.component';
import { BillingModule } from './modules/billing/billing.module';
import { ChartModule } from 'primeng/chart';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { FarmasiModule } from './modules/farmasi/farmasi.module';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        CalendarComponent,
        MenuComponent,
        LoginComponent,
        RikkesComponent,
        DataPesertaComponent,
        UploadFileComponent,
        RadiologiComponent,
        LaboratoriumComponent,
        HomeComponent,
        LeftPanelComponent,
        TopPanelComponent,
        RightPanelComponent,
        MainPanelComponent,
        BarChartComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        DicomViewerModule,
        MenuModule,
        OverlayPanelModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
        ProgressSpinnerModule,
        FileUploadModule,
        SharedModule,
        RegistrasiModule,
        RadiologiModule,
        LaporanModule,
        EKlaimModule,
        RuangRekamMedisModule,
        SettingModule,
        BillingModule,
        ChartModule,
        FarmasiModule
    ],
    providers: [
        DatePipe,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: HttpProvider, multi: true },
        { provide: DEFAULT_TIMEOUT, useValue: 50000 }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
