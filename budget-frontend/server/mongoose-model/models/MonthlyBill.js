/**
 * Created by Jonathan on 5/31/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var schema = new Schema({


  content: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Message', schema);
