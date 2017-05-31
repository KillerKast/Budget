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
            {label: 'Monthly', routerLink: ['/monthly-bill']},
            {label: 'Yearly', routerLink: ['/yearly-bill']},
            {label: 'One Time', routerLink: ['/one-time-bill']}
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
