import {Bill} from "./bill";

export class MonthlyBill extends Bill{

  private __paymentDate: number;

  constructor(name?: string, description?: string,
              paymentAmount?: number, paymentDate?: number){

    super(name, description, paymentAmount);
    this.__paymentDate = paymentDate || null;
  }

  get paymentDate(): number {
    return this.__paymentDate;
  }

  set paymentDate(thePaymentDate: number) {
    this.__paymentDate = thePaymentDate;
  }

  updateMonthlyBill(mb: MonthlyBill){
    this.updateBill(mb);
    this.__paymentDate = mb.paymentDate;
  }
}
