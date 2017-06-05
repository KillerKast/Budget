/**
 * Created by Jonathan on 6/3/2017.
 */
import {Bill} from "./bill.model";

export class OneTimeBill extends Bill{

  private __paymentDate: Date;

  constructor(id?: string, name?: string, description?: string,
              paymentAmount?: number, paymentDate?: Date){

    super(id, name, description, paymentAmount);
    this.__paymentDate = paymentDate || null;
  }

  get paymentDate(): Date {
    return this.__paymentDate;
  }

  set paymentDate(thePaymentDate: Date) {
    this.__paymentDate = thePaymentDate;
  }

  updateBill(otb: OneTimeBill){
    super.updateBill(otb);
    this.paymentDate = otb.paymentDate;
  }

  public getBill(){
    let monthlyBill = super.getBill();
    monthlyBill['paymentDate'] = this.paymentDate;
    return monthlyBill;
  }
}
