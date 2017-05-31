import {Database} from "../datasource/Database";
/**
 * Created by u721056 on 5/31/2017.
 */


export class Table{

  constructor(private db: Database){}

  testCreateTable() {
    var that = this;
    this.db.connection.sync().then(function () {
        this.db.connection.define('user', {
          username: that.db.sequelize.STRING,
          password: that.db.sequelize.STRING
        });
    });
  }

}
