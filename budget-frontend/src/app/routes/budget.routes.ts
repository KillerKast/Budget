/**
 * Created by Jonathan on 5/29/2017.
 */
import {RouterModule, Routes} from '@angular/router';
import {BillComponent} from "../expenses/bills/bill.component";

const BUDGET_ROUTES: Routes = [
  {path: '', redirectTo: 'bill', pathMatch: 'full'},
  {path: 'bill', redirectTo: 'bill/monthly-bill', pathMatch: 'full'},
  {path: 'bill/:billType', component: BillComponent}
];

export const routing = RouterModule.forRoot(BUDGET_ROUTES);
