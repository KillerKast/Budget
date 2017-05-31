import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import {Bill} from "../model/domain_implementations/bill";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BillHttpService {
  private headers = new Headers({'Content-Type':'application/json'});

  constructor(private http: Http){}

  testBillHttp() : Observable<any> {
    console.log("hello from here");
   return this.http.get('/api')
      .map(
        (response: Response) => {
          const data = response.json();
          console.log(data);
          return data;
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong');
        }
      );
  }

  createBill(bill:Bill): Observable<any>{

    let body = JSON.stringify(bill.bill);
    console.log("in create bill http service");
    return this.http.post('/api/create-bill', body, {headers: this.headers})
      .map((response: Response) => {
        const data = response.json();
        console.log(data);
        return data;
      })
      .catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong');
        }
      );
  }
}
