import {Model, Table, Column} from "sequelize-typescript";

@Table
export abstract class Bill extends Model<Bill>{

  protected __id: number;
  protected __name: string;
  protected __description: string;
  protected __paymentAmount: number;

  constructor(name?: string, description?: string,
              paymentAmount?: number) {
    super();
    this.__name = name || '';
    this.__description = description || '';
    this.__paymentAmount = paymentAmount || null;
  }

  @Column
  get id(): number {
    return this.__id;
  }

  @Column
  get name(): string {
    return this.__name;
  }

  set name(theName: string) {
    this.__name = theName;
  }

  @Column
  get description(): string {
    return this.__description;
  }

  set description(theDescription: string) {
    this.__description = theDescription;
  }

  @Column
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

  get bill(){
    return {
      id : this.__id,
      name: this.__name,
      description: this.__description,
      paymentAmount: this.__paymentAmount,
      billType: 'Bill'
    }
  }

}
