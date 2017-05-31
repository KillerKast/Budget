import {Component, OnInit} from "@angular/core";
import {YearlyBill} from "../../model/domain_implementations/yearly-bill";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";

@Component({
  selector: 'budget-yearly-bills',
  templateUrl: './yearly-bills.component.html',
  styleUrls: ['./yearly-bills.component.css']
})
export class YearlyBillsComponent implements OnInit {

  yearlyBill: YearlyBill = new YearlyBill();
  yearlyBillForm: FormGroup;


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.yearlyBillForm = this.fb.group({
      name: [this.yearlyBill.name, [<any>Validators.required]],
      description: [this.yearlyBill.description, [<any>Validators.required]],
      paymentAmount: [this.yearlyBill.paymentAmount, [Validators.required, CustomValidators.number]],
      paymentMonth: [this.yearlyBill.paymentMonth,
        [Validators.required,
          CustomValidators.digits,
          CustomValidators.min(1), CustomValidators.max(12)]],paymentDay: [this.yearlyBill.paymentDay,
        [Validators.required,
          CustomValidators.digits,
          CustomValidators.min(1), CustomValidators.max(31)]],

    });
  }

  onSubmit() {
    this.yearlyBill.updateYearlyBill(this.yearlyBillForm.value);
    console.log(this.yearlyBill);
    console.log("Submitted");
  }

}
