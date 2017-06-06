/**
 * Created by Jonathan on 6/6/2017.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DebtFormBuilder} from "./debt.form.builder";
@Component({
  selector: 'budget-debt',
  templateUrl: './debt.component.html'
})
export class DebtComponent implements OnInit{

  debtType: string;
  debtForm : FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder){
    this.routeListener();
  }
  routeListener() {
    this.route.params.subscribe(params => {
      this.debtType = params['debtType'];
    });
  }

  ngOnInit(){
    this.debtForm = this.fb.group({
      name: '',
      description: '',
      paymentAmount: '',
      paymentDate: '',
      startingBalance: '',
      apr: '',
      lastPaymentDate: ''
    });
  }

  onSubmit(){
    console.log(this.debtForm);
  }

//     this.route.params.subscribe(params => {
//         this.debtType = params('debtType');
//     });
// }
}
