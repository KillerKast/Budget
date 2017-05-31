import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {OneTimeBill} from "../../model/domain_implementations/one-time-bill";

@Component({
  selector: 'budget-one-time-bill',
  templateUrl: './one-time-bill.component.html',
  styleUrls: ['./one-time-bill.component.css']
})
export class OneTimeBillComponent implements OnInit {

  oneTimeBill: OneTimeBill = new OneTimeBill();
  oneTimeBillForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.oneTimeBillForm = this.fb.group({
      name: [this.oneTimeBill.name, [<any>Validators.required]],
      description: [this.oneTimeBill.description, [<any>Validators.required]],
      paymentAmount: [this.oneTimeBill.paymentAmount, [Validators.required, CustomValidators.number]],
      paymentDate: this.oneTimeBill.paymentDate,
    });
  }

  onSubmit() {
    this.oneTimeBill.updateOneTimeBill(this.oneTimeBillForm.value);
    console.log(this.oneTimeBill);
    console.log("Submitted");
  }

}
