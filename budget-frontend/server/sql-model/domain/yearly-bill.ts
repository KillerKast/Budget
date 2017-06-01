import {Bill} from "./bill";
export class YearlyBill extends Bill{

  private __paymentDay: number;
  private __paymentMonth: number;

  constructor(name?: string, description?: string,
              paymentAmount?: number, paymentDay?: number,
              paymentMonth?: number){

    super(name, description, paymentAmount);
    this.__paymentDay = paymentDay || null;
    this.__paymentMonth = paymentDay || null;
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

  updateYearlyBill(yb: YearlyBill){
    this.updateBill(yb);
    this.__paymentDay = yb.paymentDay;
    this.__paymentMonth = yb.paymentMonth;
  }

  get bill(){
    return {
      id : this.__id,
      name: this.__name,
      description: this.__description,
      paymentAmount: this.__paymentAmount,
      paymentDay: this.__paymentDay,
      paymentMonth: this.__paymentMonth,
      billType: 'YearlyBill'
    }
  }
}
