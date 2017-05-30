export class MonthlyBill {

  private __id: number;
  private __name: string;
  private __description: string;
  private __paymentAmount: number;
  private __paymentDate: number;

  constructor(name?: string, description?: string,
              paymentAmount?: number, paymentDate?: number){

    this.__name = name || '';
    this.__description = description || '';
    this.__paymentAmount = paymentAmount || 0;
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

  get paymentAmount() : number {
    return this.__paymentAmount;
  }
  set paymentAmount(thePaymentAmount : number){
    this.__paymentAmount = thePaymentAmount;
  }

  get paymentDate() : number {
    return this.__paymentDate;
  }
  set paymentDate(thePaymentDate : number){
    this.__paymentDate = thePaymentDate;
  }

  updateMonthlyBill(mb: MonthlyBill){
    this.__name = mb.name;
    this.__description = mb.description;
    this.__paymentAmount = mb.paymentAmount;
    this.__paymentDate = mb.paymentDate;
  }
}
