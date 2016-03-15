var mongoose = require('mongoose');
var TestSchema = require('../schemas/test');
var Test = mongoose.model('test', TestSchema);

module.exports = Test;