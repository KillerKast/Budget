/**
 * Created by u721056 on 6/5/2017.
 */
const Sequelize = require('sequelize');
const db = require('../database-connection');


const OneTimeBill = db.sequelize.define('one-time-bill', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  paymentAmount: Sequelize.DOUBLE,
  paymentDate: Sequelize.DATE,
});

module.exports = OneTimeBill;


