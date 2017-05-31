/**
 * Created by Jonathan on 5/30/2017.
 */
import {Bill} from "./bill";

export class OneTimeBill extends Bill{

  private __paymentDate: Date;

  constructor(name?: string, description?: string,
              paymentAmount?: number, paymentDate?: Date){

    super(name, description, paymentAmount);
    this.__paymentDate = paymentDate || new Date();
  }

  get paymentDate(): Date {
    return this.__paymentDate;
  }

  set paymentDate(thePaymentDate: Date) {
    this.__paymentDate = thePaymentDate;
  }

  updateBill(otb: OneTimeBill){
    super.updateBill(otb);
    this.__paymentDate = otb.paymentDate;
  }

  get bill(){
    return {
      id : this.__id,
      name: this.__name,
      description: this.__description,
      paymentAmount: this.__paymentAmount,
      paymentDate: this.__paymentDate,
      billType: 'OneTimeBill'
    }
  }
}
