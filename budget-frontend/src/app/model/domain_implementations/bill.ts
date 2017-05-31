export class Bill {

  protected __id: number;
  protected __name: string;
  protected __description: string;
  protected __paymentAmount: number;

  constructor(name?: string, description?: string,
              paymentAmount?: number) {

    this.__name = name || '';
    this.__description = description || '';
    this.__paymentAmount = paymentAmount || null;
  }

  get id(): number {
    return this.__id;
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
    this.__name = b.name;
    this.__description = b.description;
    this.__paymentAmount = b.paymentAmount;
  }
}
