import {Component} from "@angular/core";
import {Bill} from "./bill.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {ActivatedRoute} from "@angular/router";
import {MonthlyBill} from "./monthly-bill.model";
import {YearlyBill} from "./yearly-bill.model";
import {OneTimeBill} from "./one-time-bill.model";
import {BillService} from "./bill.service";
import {BillList} from "./bill-list.model";

@Component({
  selector: 'budget-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
  providers: [BillService]
})
export class BillComponent  {

  billType: string;
  bill: Bill;
  billForm: FormGroup;

  isNew: boolean = false;

  bills: BillList = new BillList();

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private billService: BillService) {
    this.billType = route.snapshot.params['billType'] || 'monthly-bill';
    console.log(this.billType);
    this.setupForm();
    this.routeListener();
  }

  setupForm() {
    this.buildBaseForm();
    this.configureBillType();
  }


  buildBaseForm() {
    this.billForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', [<any>Validators.required]],
      paymentAmount: ['', [Validators.required, CustomValidators.number]],
    });
  }

  configureBillType() {
    switch (this.billType) {
      case 'monthly-bill':
        this.bill = new MonthlyBill();
        this.billForm.addControl('paymentDate', new FormControl((<MonthlyBill>this.bill).paymentDate, Validators.required));
        if (this.billForm.contains('paymentMonth')) {
          this.billForm.removeControl('paymentMonth');
        }
        if (this.billForm.contains('paymentDay')) {
          this.billForm.removeControl('paymentDay');
        }

        break;
      case 'yearly-bill':
        this.bill = new YearlyBill();
        this.billForm.addControl('paymentDay', new FormControl((<YearlyBill>this.bill).paymentDay, Validators.required));
        this.billForm.addControl('paymentMonth', new FormControl((<YearlyBill>this.bill).paymentMonth, Validators.required));
        if (this.billForm.contains('paymentDate')) {
          this.billForm.removeControl('paymentDate');
        }
        break;
      case 'one-time-bill':
        this.bill = new OneTimeBill();
        this.billForm.addControl('paymentDate', new FormControl((<OneTimeBill>this.bill).paymentDate, Validators.required));
        if (this.billForm.contains('paymentMonth')) {
          this.billForm.removeControl('paymentMonth');
        }
        if (this.billForm.contains('paymentDay')) {
          this.billForm.removeControl('paymentDay');
        }
        break;
      default:
        break;
    }
  }

  routeListener() {
    this.route.params.subscribe(params => {
      this.billType = params['billType'];
      this.setupForm();
      this.getBills();
    });
  };

  getBills() {
    this.billService.readBills(this.billType).subscribe(
      data => {
        console.log("Success");
        console.log(data);
        this.bills = new BillList(this.billType, data.obj);
        this.onBillsChange();
      },
      error => {
        console.log("failure");
        console.log(error);
      }
    );
  }


  onNewEditClicked() {
     this.isNew = !this.isNew;
     if(!this.isNew){
       this.onBillsChange();
     }
     this.billForm.reset();
  }

  onSubmit() {
    let savingBill:any  = this.billForm.value;
    if(!this.isNew){
      savingBill.id = this.bills.getSingleBill(savingBill.name).id;
      savingBill.name = this.bills.getSingleBill(savingBill.name).name;
    }

    this.bill.updateBill(savingBill);
    if(this.isNew){
      this.billService.createBill(this.billType, this.bill).subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    } else if(!this.isNew){
      this.billService.updateBill(this.billType, this.bill).subscribe(
        data => console.log(data),
        error => console.error(error)
      )
      console.log(this.bill);
    }
    // this.bill.updateBill(this.billForm.value);

  }

  onBillsChange() {
    console.log(this.billType);
    let id = this.billForm.value.name || 0;

    this.bill = this.bills.getSingleBill(id);

    this.billForm.controls['description'].patchValue(this.bill.description);
    this.billForm.controls['paymentAmount'].patchValue(this.bill.paymentAmount);
    if(this.billType == 'monthly-bill'){
      this.billForm.controls['paymentDate'].patchValue((<MonthlyBill>this.bill).paymentDate);
    }
    if(this.billType == 'yearly-bill'){
      this.billForm.controls['paymentDay'].patchValue((<YearlyBill>this.bill).paymentDay);
      this.billForm.controls['paymentMonth'].patchValue((<YearlyBill>this.bill).paymentMonth);
    }
    if(this.billType == 'one-time-bill'){
      this.billForm.controls['paymentDate'].patchValue((<OneTimeBill>this.bill).paymentDate);
    }
    this.billForm.markAsPristine();
    console.log(this.bill);
  }


}

