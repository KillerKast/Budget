import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InputTextModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { BillsOneTimeComponent } from './expenses/bills/bills-one-time/bills-one-time.component';
import { BillsMonthlyComponent } from './expenses/bills/bills-monthly/bills-monthly.component';
import { BillsYearlyComponent } from './expenses/bills/bills-yearly/bills-yearly.component';
import { CreditWInterestComponent } from './expenses/credit/credit-w-interest/credit-w-interest.component';
import { CreditWoInterestComponent } from './expenses/credit/credit-wo-interest/credit-wo-interest.component';

@NgModule({
  declarations: [
    AppComponent,
    BillsOneTimeComponent,
    BillsMonthlyComponent,
    BillsYearlyComponent,
    CreditWInterestComponent,
    CreditWoInterestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
