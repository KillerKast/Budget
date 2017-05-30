import {Bills} from './bills';

export interface billsYearly extends Bills{
  payment_day: number;
  payment_month: number;
}
