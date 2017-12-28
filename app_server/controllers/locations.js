var devices = [
{
    name: 'устройство',
    lastUpdateTime: null
},
{
    name: 'device2',
    lastUpdateTime: null
}
];

console.log('-location.js - controrrer-wrk-');

/*
setInterval( function() {
    var now = new Date();
    console.log('-start timer-');
    devices.forEach( function(item, i, arr) {
        item.lastUpdateTime = now.toISOString();
        console.log(item.lastUpdateTime);
    })
}, 3000);
*/

module.exports = function(req, res) {
 //   console.log(arguments);
 //   console.log(module);
    res.render('index', {devices: devices});
};