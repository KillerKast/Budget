/**
 * Created by Jonathan on 5/29/2017.
 */
import { Routes } from '@angular/router';
import {MonthlyBillsComponent} from '../views/monthly-bills/monthly-bills.component';
import {YearlyBillsComponent} from "../views/yearly-bills/yearly-bills.component";

export const budget_routes: Routes = [
  {path: 'monthly-bill', component: MonthlyBillsComponent},
  {path: 'yearly-bill', component: YearlyBillsComponent}
];
