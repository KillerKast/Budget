/**
 * Created by Jonathan on 5/31/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MonthlyBillSchema = new Schema({
  name: {type: String,  required: true},
  description: {type: String, required: true},
  paymentAmount: {type: Number, required: true},
  paymentDate: {type: Number, required: true},
  startingBalance: {type: Number, required: true},
  lastPaymentDate: {type: Date, required: true}
});

module.exports = mongoose.model('MonthlyBill', MonthlyBillSchema);

