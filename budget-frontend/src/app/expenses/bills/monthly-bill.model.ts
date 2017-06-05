import {Bill} from "./bill.model";

export class MonthlyBill extends Bill{

  private __paymentDate: number;

  constructor(id?: string, name?: string, description?: string,
              paymentAmount?: number, paymentDate?: number){

    super(id, name, description, paymentAmount);
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
    this.paymentDate = mb.paymentDate;
  }

  public getBill(){
    let monthlyBill = super.getBill();
    monthlyBill['paymentDate'] = this.paymentDate;
    return monthlyBill;
  }
}
