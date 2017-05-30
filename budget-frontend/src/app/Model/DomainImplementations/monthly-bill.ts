export class MonthlyBill {

  private __id: number;
  private __name: string;
  private __description: string;
  private __payment: number;
  private __paymentDate: number;

  constructor(name?: string, description?: string,
              payment?: number, paymentDate?: number){

    this.__name = name || '';
    this.__description = description || '';
    this.__payment = payment || 0;
    this.__paymentDate = paymentDate || 0;
  }

  get id() : number {
    return this.__id;
  }

  get name(): string {
    return this.__name;
  }
  set name(theName: string){
    this.__name = theName;
  }

  get description(): string {
    return this.__description;
  }
  set description(theDescription: string){
    this.__description = theDescription;
  }

  get payment() : number {
    return this.__payment;
  }
  set payment(thePayment : number){
    this.__payment = thePayment;
  }

  get paymentDate() : number {
    return this.__paymentDate;
  }
  set paymentDate(thePaymentDate : number){
    this.__paymentDate = thePaymentDate;
  }

}
