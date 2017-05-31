import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import {Bill} from "../model/domain_implementations/bill";


@Injectable()
export class BillHttpService {
  private headers = new Headers({'Content-Type':'application/json'});

  constructor(private http: Http){}

  testBillHttp(){
    this.http.get('localhost:3000/api');
  }

  createBill(bill:Bill, billType: string){
    let createBill = {
      bill: bill,
      billType: billType
    };

    let body = JSON.stringify(createBill);

    console.log(body);

    this.http.post('/api/create-bill', body, {headers: this.headers});
  }
}
