import {Creditors} from './creditors';

export interface CreditorPaymentPlan extends Creditors{
  paymentDate: number;
  endMonth: number;
  endYear: number;
}
