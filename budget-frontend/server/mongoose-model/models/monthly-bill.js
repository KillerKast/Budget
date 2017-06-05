/**
 * Created by Jonathan on 5/31/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MonthlyBillSchema = new Schema({
  name: {type: String,  required: true},
  description: {type: String, required: true},
  paymentAmount: {type: Number, required: true},
  paymentDate: {type: Number, required: true}
});

module.exports = mongoose.model('MonthlyBill', MonthlyBillSchema);

/*
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var User = require('./user');

 var schema = new Schema({
 content: {type: String, required: true},
 user: {type: Schema.Types.ObjectId, ref: 'User'}
 });

 schema.post('remove', function (message) {
 User.findById(message.user, function (err, user) {
 user.messages.pull(message);
 user.save();
 });
 });

 module.exports = mongoose.model('Message', schema);
 */
