import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DicomViewerModule } from 'ng-dicomviewer';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule, DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CanvasWhiteboardModule } from 'ng2-canvas-whiteboard';
import { UserComponent } from './templates/user/user.component';
import { CalendarComponent } from './templates/calendar/calendar.component';
import { MenuComponent } from './templates/menu/menu.component';
import { MenuEmrComponent } from "./components/tpl/menu-emr/menu-emr.component";

import { MenuModule } from "primeng/menu";
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

import { LoginComponent } from './components/login/login.component';
import { DEFAULT_TIMEOUT, HttpProvider } from './providers/http.interceptor';
import { DialogModule } from 'primeng/dialog';


let primeModules: any = [
    MenuModule,
    OverlayPanelModule,
    DropdownModule,
    MenubarModule,
    ProgressSpinnerModule,
    ToastModule,
    DialogModule
]

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        MenuEmrComponent,
        CalendarComponent,
        MenuComponent,
        LoginComponent
    ],
    imports: [
        primeModules,
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        DicomViewerModule,
        FormsModule,
        ReactiveFormsModule,
        CanvasWhiteboardModule,
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
