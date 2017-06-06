/**
 * Created by Jonathan on 6/4/2017.
 */
const OneTimeBill = require('../models/one-time-bill');

const otbr = {};

otbr.createBill = function(otb) {
  var oneTimeBill = new OneTimeBill({
    name: otb.name,
    description: otb.description,
    paymentAmount: otb.paymentAmount,
    paymentDate: otb.paymentDate
  });

  return oneTimeBill.save()
    .then(function(savedOneTimeBill){
      return(savedOneTimeBill);
    })
    .catch(function(error){
      throw(error);
    });
};

otbr.readBills = function(){
  return OneTimeBill.find()
    .then(function(oneTimeBills){
      return oneTimeBills;
    })
    .catch(function(error){
      throw(error);
    })
};

otbr.updateBill = function(otb){
  var promise = OneTimeBill.findById(otb.id).exec();
    promise.then(function(updatingOneTimeBill){
      updatingOneTimeBill.name = otb.name;
      updatingOneTimeBill.description = otb.description;
      updatingOneTimeBill.paymentAmount = otb.paymentAmount;
      updatingOneTimeBill.paymentDate = otb.paymentDate;
      updatingOneTimeBill.save();
    }).then(function(updatedOneTimeBill){
      return updatedOneTimeBill;
    }).catch(function(error){
      throw(error);
    });
};

module.exports = otbr;
