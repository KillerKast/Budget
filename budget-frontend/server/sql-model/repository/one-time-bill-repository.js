/**
 * Created by u721056 on 6/5/2017.
 */
const OneTimeBill = require('../models/one-time-bill');
const db = require('../database-connection');

const otbr = {}

otbr.createBill = function(otb){
  otbObj = {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    paymentAmount: Sequelize.DOUBLE,
    paymentDate: DATE,
  }


  return db.sequelize.sync().then(() => OneTimeBill.create(otbObj))
    .then(createdOneTimeBill => {
      return createdOneTimeBill;
    })
    .catch((error) => {
      throw(error);
    });
};

module.exports = otbr;


