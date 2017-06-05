/**
 * Created by u721056 on 6/5/2017.
 */
const Sequelize = require('sequelize');
const db = require('../database-connection');


const MonthlyBill = db.sequelize.define('monthly-bill', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  paymentAmount: Sequelize.DOUBLE,
  paymentDate: Sequelize.INTEGER,
});

module.exports = MonthlyBill;


