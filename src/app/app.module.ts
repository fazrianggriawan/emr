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
        LaboratoriumComponent
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
        SharedModule
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
