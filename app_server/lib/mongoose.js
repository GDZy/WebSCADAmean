var mongoose = require('mongoose');
var config = require('../config/config.json');

console.log('-mongoose.js');

mongoose.connect(config.mongoose.uri, { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;