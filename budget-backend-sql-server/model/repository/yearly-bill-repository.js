/**
 * Created by u721056 on 6/5/2017.
 */
const MonthlyBill = require('../models/monthly-bill');
const db = require('../database-connection');

const ybr = {}

ybr.createBill = function(yb){
  ybObj = {
      name: yb.name,
      description: yb.description,
      paymentAmount: yb.paymentAmount,
      paymentDay: yb.paymentDay,
      paymentMonth: yb.paymentMonth
    }

  return db.sequelize.sync().then(() => YearlyBill.create(yb))
    .then(createdYearlyBill => {
      return createdYearlyBill;
    })
    .catch((error) => {
      throw(error);
    });
};

ybr.readBills = function () {
	return db.sequelize.sync().then(() => {
		return YearlyBill.findAll({raw: true}).then(yearlyBills => {
			return yearlyBills
		})
			.catch((error) => {
				throw(error);
			});
	});
};

module.exports = ybr;
