/**
 * Created by u721056 on 5/31/2017.
 */
import * as __Sequelize from 'sequelize';
import {Injectable} from "@angular/core";

@Injectable()
export class Database{
  private __connection = new __Sequelize('Budget', 'budget', 'k1ll3rk@st',{
    host: 'localhost',
    port: null,
    dialect: 'mssql',
    dialectOptions: {
      instanceName: 'GAC_DEV'
    },
    pool : {
      max: 5,
      min: 5,
      idle: 10000
    }
  });

  constructor(){

  }

  get connection() : any {
    return this.__connection;
  }

  get sequelize(): any {
    return __Sequelize;
  }
}
