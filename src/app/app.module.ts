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
import { MenuEmrComponent } from "./components/tpl/menu-emr/menu-emr.component";

import { LoginComponent } from './components/login/login.component';
import { DEFAULT_TIMEOUT, HttpProvider } from './providers/http.interceptor';
import { SharedModule } from './modules/shared/shared.module';

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
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        DicomViewerModule,
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
