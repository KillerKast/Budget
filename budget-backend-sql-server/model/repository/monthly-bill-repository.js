/**
 * Created by u721056 on 6/5/2017.
 */
const MonthlyBill = require('../models/monthly-bill');
const db = require('../database-connection');

const mbr = {}

mbr.createBill = function (mb) {
	mbObj = {
		name: mb.name,
		description: mb.description,
		paymentAmount: mb.paymentAmount,
		paymentDate: mb.paymentDate,
	}

	return db.sequelize.sync().then(() => MonthlyBill.create(mbObj))
		.then(createdMonthlyBill => {
			return createdMonthlyBill;
		})
		.catch((error) => {
			throw(error);
		});
};

mbr.readBills = function () {
	return db.sequelize.sync().then(() => {
		return MonthlyBill.findAll({raw: true}).then(monthlyBills => {
			return monthlyBills
		})
		.catch((error) => {
			throw(error);
		});
	});
};

mbr.updateBills = function(){
	return db.sequelize.sync().then(()=>{
		return MonthlyBill.findByPrimary()
	});
}


module.exports = mbr;


