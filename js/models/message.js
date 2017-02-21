var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messageSchema = mongoose.Schema({
  author: String,
  message: String,
})

module.exports = mongoose.model('message', messageSchema);
