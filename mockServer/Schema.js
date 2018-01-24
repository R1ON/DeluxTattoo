var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DevicesSchema   = new Schema({
  test: String
});

module.exports = mongoose.model('OMG', DevicesSchema);