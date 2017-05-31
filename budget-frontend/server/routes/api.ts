/**
 * Created by u721056 on 5/31/2017.
 */
export class Routes{

  constructor(private app: any){
    this.addRoutes();
  }

  addRoutes(){
    this.app.get('/', (req, res) => {
      console.log('this has loaded');
      res.send({testString: 'api works'});
    });

    this.app.post('/create-bill', (req, res) => {
      console.log(req.body);
      res.send({testString: 'create bill'});
    });

  }

}

