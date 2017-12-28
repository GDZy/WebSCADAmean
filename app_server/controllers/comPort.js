var ComPort = require('../models/comPort').ComPort;

ComPort.find(function(err, doc) {
    if (doc.length) {
        return;
    }

    var comPort = new ComPort({
        portName: "COM1",
        boudRate: 19200
    });

    comPort.save(function(err, comPort, affected) {
        if (err) throw err;
        console.log(arguments);
    });
})

module.exports = function(req, res) {
    console.log('-=comPort=-');
    res.send('comPort module')
}