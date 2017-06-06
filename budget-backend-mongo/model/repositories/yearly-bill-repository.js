/**
 * Created by Jonathan on 6/4/2017.
 */
const YearlyBill = require('../models/yearly-bill');

const ybr = {};

ybr.createBill = function(yb) {
  var yearlyBill = new YearlyBill({
    name: yb.name,
    description: yb.description,
    paymentAmount: yb.paymentAmount,
    paymentMonth: yb.paymentMonth,
    paymentDay: yb.paymentDay,
  });

  return yearlyBill.save()
    .then(function(savedYearlyBill){
      return(savedYearlyBill);
    })
    .catch(function(error){
      throw(error);
    });
}

ybr.readBills = function(){
  return YearlyBill.find()
    .then(function(yearlyBills){
      return yearlyBills;
    })
    .catch(function(error){
      throw(error);
    })
};

ybr.updateBill = function(yb){
 var promise = YearlyBill.findById(yb.id).exec();
    promise.then(function(updatingYearlyBill){
      updatingYearlyBill.name = yb.name;
      updatingYearlyBill.description = yb.description;
      updatingYearlyBill.paymentAmount = yb.paymentAmount;
      updatingYearlyBill.paymentMonth = yb.paymentMonth;
      updatingYearlyBill.paymentDay = yb.paymentDay;
      updatingYearlyBill.save();
    }).then(function(updatedYearlyBill){
      return updatedYearlyBill;
    }).catch(function(error){
      throw(error);
    });
};

module.exports = ybr;
