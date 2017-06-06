/**
 * Created by u721056 on 6/5/2017.
 */
const OneTimeBill = require('../models/one-time-bill');
const db = require('../database-connection');

const otbr = {}

otbr.createBill = function(otb){
  otbObj = {
    name: otb.name,
    description: otb.description,
    paymentAmount: otb.paymentAmount,
    paymentDate: otb.paymentDate,
  };

  return db.sequelize.sync().then(() => OneTimeBill.create(otbObj))
    .then(createdOneTimeBill => {
      return createdOneTimeBill;
    })
    .catch((error) => {
      throw(error);
    });
};

otbr.readBills = function () {
	return db.sequelize.sync().then(() => {
		return OneTimeBill.findAll({raw: true}).then(oneTimeBills => {
			return oneTimeBills
		})
        .catch((error) => {
            throw(error);
        });
	});
};

module.exports = otbr;