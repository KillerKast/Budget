/**
 * Created by u721056 on 6/5/2017.
 */
var Sequelize = require("sequelize");

var databaseConnection = {}



databaseConnection.sequelize =  new Sequelize('budget', 'budget', 'k1ll3rk@st',{
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    instanceName: 'GAC_DEV'
  },
});

databaseConnection.testAuthetication = function(){
  this.sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established');
    })
    .catch((err)=>{
      console.error('Unable to connect to the database.');
    });
}

module.exports = databaseConnection;
