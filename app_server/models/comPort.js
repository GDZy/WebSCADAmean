var mongoose = require('../lib/mongoose');
Schema = mongoose.Schema;

var schema = new Schema({
    portName: {
        type: String,
        unique: true,
        require: true
    },
    boudRate: {
        type: Number,
        unique: true,
        require: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

exports.ComPort = mongoose.model('ComPortConfig', schema);