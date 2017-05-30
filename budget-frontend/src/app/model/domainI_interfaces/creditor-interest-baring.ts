import {Creditors} from './creditors';

export interface CreditorInterestBaring extends Creditors{
  paymentDate: number;
  annualPercentageRate: number;
}
