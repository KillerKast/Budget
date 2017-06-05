export abstract class Bill{

  constructor(protected __id?: string, protected __name?: string, protected __description?: string,
              protected __paymentAmount?: number) {

  }

  get id(): string {
    return this.__id;
  }

  set id(id: string) {
    this.__id = id;
  }

  get name(): string {
    return this.__name;
  }

  set name(theName: string) {
    this.__name = theName;
  }

  get description(): string {
    return this.__description;
  }

  set description(theDescription: string) {
    this.__description = theDescription;
  }

  get paymentAmount(): number {
    return this.__paymentAmount;
  }

  set paymentAmount(thePaymentAmount: number) {
    this.__paymentAmount = thePaymentAmount;
  }

  updateBill(b: Bill) {
    this.id = b.id;
    this.name = b.name;
    this.description = b.description;
    this.paymentAmount = b.paymentAmount;
  }

  get bill(){
    return {
      id : this.id,
      name: this.name,
      description: this.description,
      paymentAmount: this.paymentAmount,
      billType: 'Bill'
    }
  }

  public getBill(){
    return this.bill;
  }



}
