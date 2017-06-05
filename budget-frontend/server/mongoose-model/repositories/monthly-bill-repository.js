/**
 * Created by Jonathan on 6/4/2017.
 */
const mbr = {};

var MonthlyBill = require('../models/monthly-bill');

mbr.createBill = function(mb) {
  var monthlyBill = new MonthlyBill({
    name: mb.name,
    description: mb.description,
    paymentAmount: mb.paymentAmount,
    paymentDate: mb.paymentDate
  });

  return monthlyBill.save()
    .then(function(savedMonthlyBill){
      return(savedMonthlyBill);
    })
    .catch(function(error){
      throw(error);
    });
};

mbr.readBills = function(){
  return MonthlyBill.find()
    .then(function(monthlyBills){
      return monthlyBills;
    })
    .catch(function(error){
      throw(error);
    })
};

mbr.updateBill = function(mb){
    var promise = MonthlyBill.findById(mb.id).exec();
    promise.then(function(updatingMonthlyBill) {
      updatingMonthlyBill.name = mb.name;
      updatingMonthlyBill.description = mb.description;
      updatingMonthlyBill.paymentAmount = mb.paymentAmount;
      updatingMonthlyBill.paymentDate = mb.paymentDate;
      updatingMonthlyBill.save();
    }).then(function(updatedMonthlyBill){
      return updatedMonthlyBill;
    })
    .catch(function(error){
      throw(error);
    });
    return promise;
};

module.exports = mbr;
