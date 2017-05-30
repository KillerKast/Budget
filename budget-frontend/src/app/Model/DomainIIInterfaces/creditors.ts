import {Expenses} from './expenses';

export interface Creditors extends Expenses{
  payment: number;
  starting_balance: number;
}
