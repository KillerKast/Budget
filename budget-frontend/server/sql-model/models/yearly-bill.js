/**
 * Created by u721056 on 6/5/2017.
 */
const Sequelize = require('sequelize');
const db = require('../database-connection');


const YearlyBill = db.sequelize.define('yearly-bill', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  paymentAmount: Sequelize.DOUBLE,
  paymentDay: Sequelize.INTEGER,
  paymentMonth: Sequelize.INTEGER
});

module.exports = YearlyBill;
