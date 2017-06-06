/**
 * Created by Jonathan on 5/29/2017.
 */
import {RouterModule, Routes} from '@angular/router';
import {BillComponent} from "../expenses/bills/bill.component";
import {DebtComponent} from "../expenses/debts/debt.component";

const BUDGET_ROUTES: Routes = [
  {path: '', redirectTo: 'bill', pathMatch: 'full'},
  {path: 'bill', redirectTo: 'bill/monthly-bill', pathMatch: 'full'},
  {path: 'bill/:billType', component: BillComponent},
  {path: 'debt', redirectTo: 'debt/interest-baring-debt'},
  {path: 'debt/:debtType', component: DebtComponent}
];

export const routing = RouterModule.forRoot(BUDGET_ROUTES);
