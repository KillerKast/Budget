import {Expenses} from './expenses';

export interface Bills extends Expenses {
  payment: number;
}
