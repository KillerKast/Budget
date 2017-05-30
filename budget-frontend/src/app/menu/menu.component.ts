import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng/primeng";

@Component({
  selector: 'budget-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [{
      label: 'Expenses',
      items: [
        {label: 'Bills',
          items: [
            {label: 'Monthly', routerLink: ['/monthly-bills']},
            {label: 'Yearly'},
            {label: 'One Time'}
          ]
        },
        {label: 'Debts'},
        {label: 'Daily'}
      ]
    },
    {
      label : 'Income'
    }];
  }

}
