import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng/primeng";

@Component({
  selector: 'budget-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [{
      label: 'Expenses',
      items: [
        {label: 'Bills',
          items: [
            {label: 'Monthly', routerLink: ['bill','monthly-bill']},
            {label: 'Yearly', routerLink: ['bill', 'yearly-bill']},
            {label: 'One Time', routerLink: ['bill', 'one-time-bill']}
          ]
        },
        {label: 'Debts',
          items: [
            {label: 'Interest Baring Debt', routerLink: ['debt','interest-baring-debt']},
            {label: 'Interest Free Debt', routerLink: ['debt', 'interest-free-debt']},
            {label: 'Payment Plans', routerLink: ['debt', 'payment-plan']}
          ]},
        {label: 'Daily'}
      ]
    },
    {
      label : 'Income'
    }];
  }

}
