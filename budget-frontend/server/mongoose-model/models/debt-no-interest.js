var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DebtNoInterestSchema = new Schema({
  name: {type: String,  required: true},
  description: {type: String, required: true},
  paymentAmount: {type: Number, required: true},
  paymentDate: {type: Number, required: true},
  startingBalance: {type: Number, required: true}
});

module.exports = mongoose.model('DebtNoInterest', DebtNoInterestSchema);
