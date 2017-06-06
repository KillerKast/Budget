import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {
  ButtonModule, CalendarModule, DropdownModule, InputTextModule, MenuModule,
  PanelMenuModule
} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

import {BillComponent} from "./expenses/bills/bill.component";
import {routing} from "./routes/budget.routes";
import {ReactiveFormsModule} from "@angular/forms";
import {DebtComponent} from "./expenses/debts/debt.component";

@NgModule({
  declarations: [
    AppComponent,
    BillComponent,
    DebtComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    ReactiveFormsModule,
    HttpModule,

    InputTextModule,
    MenuModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
