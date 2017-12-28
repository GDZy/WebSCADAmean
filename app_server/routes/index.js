var express = require('express');
var router = express.Router();
var ctrLocation = require('../controllers/locations');
var ctrComPort = require('../controllers/comPort');

router.get('/', ctrLocation);

router.get('/com', ctrComPort);

module.exports = router;
