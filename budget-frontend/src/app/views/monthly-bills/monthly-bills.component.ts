import { Component, OnInit } from '@angular/core';
import {MonthlyBill} from '../../model/domain_implementations/monthly-bill'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'budget-monthly-bills',
  templateUrl: './monthly-bills.component.html',
  styleUrls: ['./monthly-bills.component.css']
})
export class MonthlyBillsComponent implements OnInit {

  monthlyBill: MonthlyBill = new MonthlyBill();
  monthlyBillForm : FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.monthlyBillForm = this.fb.group({
      name: ['', [<any>Validators.required]],
      description: ['', [<any>Validators.required]],
      paymentAmount: ['', [<any>Validators.required]],
      paymentDate: ['', [<any>Validators.required]]
    });
  }

  onSubmit(){
    console.log(this.monthlyBillForm);
 //   this.monthlyBill = this.monthlyBillForm.value;
    this.monthlyBill.updateMonthlyBill(this.monthlyBillForm.value);
    console.log(this.monthlyBill);
    console.log("Submitted");
  }

}
