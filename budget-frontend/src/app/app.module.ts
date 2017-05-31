import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
  ButtonModule, CalendarModule, DropdownModule, InputTextModule, MenuModule,
  PanelMenuModule
} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import {budget_routes} from './controller/budget.routes';

import { MonthlyBillsComponent } from './views/monthly-bills/monthly-bills.component';
import {YearlyBillsComponent} from "./views/yearly-bills/yearly-bills.component";
import {OneTimeBillComponent} from "./views/one-time-bill/one-time-bill.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    MonthlyBillsComponent,
    OneTimeBillComponent,
    YearlyBillsComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    MenuModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(budget_routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
