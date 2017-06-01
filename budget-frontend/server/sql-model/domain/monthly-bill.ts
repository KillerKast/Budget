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

  updateBill(mb: MonthlyBill){
    super.updateBill(mb);
    this.__paymentDate = mb.paymentDate;
  }

  get bill(){
    return {
      id : this.__id,
      name: this.__name,
      description: this.__description,
      paymentAmount: this.__paymentAmount,
      paymentDate: this.__paymentDate,
      billType: 'MonthlyBill'
    }
  }
}
