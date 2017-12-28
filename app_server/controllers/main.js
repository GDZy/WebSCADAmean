module.exports.index = function (req, res, next) {
    if (!updateTime) {
        var updateTime = {
            lastUpdate: null,
            currentDate: new Date()      
        }
    } 

    res.render('index', { updateTime: updateTime });

    updateTime.lastUpdate = updateTime.currentDate;
}
