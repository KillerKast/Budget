/**
 * Created by Jonathan on 5/31/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: {type: String,  required: true},
  description: {type: String, required: true},
  paymentAmount: {type: Number, required: true},
  paymentMonth: {type: Number, required: true},
  paymentDay: {type: Number, required: true},
});

module.exports = mongoose.model('YearlyBill', schema);
