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
import {CardModule} from 'primeng/card';
import { OrderComponent } from './components/order/order.component';
import { DataViewModule } from "primeng/dataview";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { CheckboxModule } from "primeng/checkbox";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DtOrderComponent,
    OrderComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
