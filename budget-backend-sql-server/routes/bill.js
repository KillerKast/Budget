/**
 * Created by u721056 on 6/5/2017.
 */
var express = require('express');
var billRouter = express.Router();

var db = require('../model/database-connection');
var mbr = require('../model/repository/monthly-bill-repository');
var otbr = require('../model/repository/one-time-bill-repository');
var ybr = require('../model/repository/yearly-bill-repository');


billRouter.get('/:billType', function(req, res, next){
  const billType = req.params.billType;
  var readReturn;

  if(billType === 'monthly-bill'){
    readReturn = mbr.readBills();
  } else if (billType === 'yearly-bill'){
    readReturn = ybr.readBills();
  } else if(billType === 'one-time-bill'){
    readReturn = otbr.readBills();
  } else {
    console.log("hello from no billType");
    return res.status(500).json({
      success: 'no-success',
      message: 'Incorrect Bill Type'
    });
  }

  readReturn.then(bills => {
    console.log("SavedBills: " + bills);
    return res.status(200).json({
      success: 'success',
      obj: bills,
    })
  }).catch(function(error){
    console.log(error);
    console.log("WTF");
    return res.status(500).json({
      success: 'no-success',
      message: error
    })
  });
});


billRouter.post('/:billType', function(req, res, next){
  var billType = req.params.billType;
  var saveReturn;

  if(billType === 'monthly-bill'){
    saveReturn = mbr.createBill(req.body);
  } else if (billType === 'yearly-bill'){
    saveReturn = ybr.createBill(req.body);
  } else if(billType === 'one-time-bill'){
    saveReturn = otbr.createBill(req.body);
  } else {
    return res.status(500).json({
      success: 'no-success',
      message: 'Incorrect Bill Type'
    });
  }
  saveReturn.then(function(savedBill){

    return res.status(201).json({
      success: 'success',
      obj: savedBill
    })
  }).catch(function(error){
    return res.status(500).json({
      success: 'no-success',
      message: error._message
    })
  });

});


module.exports = billRouter;
