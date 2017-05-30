import { Component, OnInit } from '@angular/core';
import {MonthlyBill} from '../../model/domain_implementations/monthly-bill'

@Component({
  selector: 'budget-monthly-bills',
  templateUrl: './monthly-bills.component.html',
  styleUrls: ['./monthly-bills.component.css']
})
export class MonthlyBillsComponent implements OnInit {

  monthlyBill: MonthlyBill = new MonthlyBill();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.monthlyBill);
    console.log("Submitted");
  }

}
