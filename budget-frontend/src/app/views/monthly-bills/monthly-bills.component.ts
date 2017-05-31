import {Component, OnInit} from "@angular/core";
import {MonthlyBill} from "../../model/domain_implementations/monthly-bill";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {BillHttpService} from "../../service/bill-http.service";

@Component({
  selector: 'budget-monthly-bills',
  templateUrl: './monthly-bills.component.html',
  styleUrls: ['./monthly-bills.component.css']
})
export class MonthlyBillsComponent implements OnInit {

  monthlyBill: MonthlyBill = new MonthlyBill();
  monthlyBillForm: FormGroup;


  constructor(private fb: FormBuilder, private billService: BillHttpService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.monthlyBillForm = this.fb.group({
      name: [this.monthlyBill.name, [<any>Validators.required]],
      description: [this.monthlyBill.description, [<any>Validators.required]],
      paymentAmount: [this.monthlyBill.paymentAmount, [Validators.required, CustomValidators.number]],
      paymentDate: [this.monthlyBill.paymentDate,
        [Validators.required,
          CustomValidators.digits,
          CustomValidators.min(1), CustomValidators.max(31)]]
    });
  }

  onSubmit() {
    this.monthlyBill.updateMonthlyBill(this.monthlyBillForm.value);
    this.billService.testBillHttp();
    this.billService.createBill(this.monthlyBill, 'monthly-bill');
    console.log(this.monthlyBill);
    console.log("Submitted");
  }

}
