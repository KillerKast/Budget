/**
 * Created by Jonathan on 6/6/2017.
 */
import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'budget-debt',
  template: '<h1>{{debtType}}</h1>'
})
export class DebtComponent{

  debtType: string;

  constructor(private route: ActivatedRoute){
    this.routeListener();
  }
  routeListener() {
    this.route.params.subscribe(params => {
      this.debtType = params['debtType'];
    });
  }

//     this.route.params.subscribe(params => {
//         this.debtType = params('debtType');
//     });
// }
}
