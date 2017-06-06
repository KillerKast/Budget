import {FormBuilder} from "@angular/forms";
/**
 * Created by Jonathan on 6/6/2017.
 */
export class DebtFormBuilder {
  constructor(private fb : FormBuilder){}

  getDebtForm(){
    return this.fb.group({
      name: '',
      description: '',
      paymentAmount: '',
      paymentDate: '',
      startingBalance: '',
      apr: '',
      lastPaymentDate: ''
    })
  }
}
