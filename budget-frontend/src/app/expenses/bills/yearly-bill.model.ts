import {Bill} from "./bill.model";

export class YearlyBill extends Bill{

  private __paymentDay: number;
  private __paymentMonth: number;

  constructor(id?:string, name?: string, description?: string,
              paymentAmount?: number, paymentDay?: number,
              paymentMonth?: number){

    super(id, name, description, paymentAmount);
    this.__paymentDay = paymentDay || null;
    this.__paymentMonth = paymentMonth || null;
  }

  get paymentDay(): number {
    return this.__paymentDay;
  }

  set paymentDay(thePaymentDay: number) {
    this.__paymentDay = thePaymentDay;
  }

  get paymentMonth(): number {
    return this.__paymentMonth;
  }

  set paymentMonth(thePaymentMonth: number) {
    this.__paymentMonth = thePaymentMonth;
  }

  updateBill(yb: YearlyBill){
    super.updateBill(yb);
    this.paymentDay = yb.paymentDay;
    this.paymentMonth = yb.paymentMonth;
  }

  public getBill(){
    let yearlyBill = super.getBill();
    yearlyBill['paymentDay'] = this.paymentDay;
    yearlyBill['paymentMonth'] = this.paymentMonth;
    return yearlyBill;
  }
}
