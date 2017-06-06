/**
 * Created by Jonathan on 6/3/2017.
 */
const express = require('express');
const billRouter = express.Router();
const mbr = require('../model/repositories/monthly-bill-repository');
const ybr = require('../model/repositories/yearly-bill-repository');
const otbr = require('../model/repositories/one-time-bill-repository');

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

  readReturn.then(function(bills){
    return res.status(200).json({
      success: 'success',
      obj: bills,
    })
  }).catch(function(error){
    return res.status(500).json({
      success: 'no-success',
      message: error._message
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
      obj: savedBill,
    })
  }).catch(function(error){
    return res.status(500).json({
      success: 'no-success',
      message: error._message
    })
  });

});

billRouter.patch('/:billType', function(req, res, next){
  var billType = req.params.billType;
  var updateReturn;

  if(billType === 'monthly-bill'){
    updateReturn = mbr.updateBill(req.body);
  } else if (billType === 'yearly-bill'){
    updateReturn = ybr.updateBill(req.body);
  } else if(billType === 'one-time-bill'){
    updateReturn = otbr.updateBill(req.body);
  } else {
    return res.status(500).json({
      success: 'no-success',
      message: 'Incorrect Bill Type'
    });
  }
  updateReturn.then(function(updatedBill){
    return res.status(201).json({
      success: 'success',
      obj: updatedBill,
    })
  }).catch(function(error){
    return res.status(500).json({
      success: 'no-success',
      message: error._message
    })
  });

});



module.exports = billRouter;
