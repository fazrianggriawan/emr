import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { MenubarModule } from "primeng/menubar";
import { DialogModule } from "primeng/dialog";
import { DtOrderComponent } from './components/dt-order/dt-order.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabViewModule } from "primeng/tabview";
import { StepsModule } from "primeng/steps";
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { OrderComponent } from './components/order/order.component';
import { DataViewModule } from "primeng/dataview";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { CheckboxModule } from "primeng/checkbox";
import { FormsModule } from "@angular/forms";
import { SidebarModule } from "primeng/sidebar";
import { AccordionModule } from "primeng/accordion";
import { InputMaskModule } from 'primeng/inputmask';
import { ChipModule } from "primeng/chip";
import { FormOrderComponent } from './components/form-order/form-order.component';
import { LoginComponent } from './components/login/login.component';
import { UrologiComponent } from './components/urologi/urologi.component';


@NgModule({
  declarations: [
    AppComponent,
    DtOrderComponent,
    OrderComponent,
    FormOrderComponent,
    LoginComponent,
    UrologiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    TableModule,
    BrowserAnimationsModule,
    MenubarModule,
    TabViewModule,
    StepsModule,
    TagModule,
    CardModule,
    DataViewModule,
    OverlayPanelModule,
    CheckboxModule,
    FormsModule,
    SidebarModule,
    AccordionModule,
    InputMaskModule,
    ChipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
