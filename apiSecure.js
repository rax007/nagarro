var express = require('express'),
    app = express(),
    fs = require('fs');


//Securing API
var express = require('express'),
    app = express(),
    fs = require('fs');


//Securing API
app.use('/:key?', function (req, res, next) {
    var keys = ['key1', 'key2'],
        paramKey = req.param('key');

    if (keys.indexOf(paramKey) != -1) {
        next();
    } else {
        res.send('You are not authorized.')
    }

});

var server = app.get('/:key/api/getpassword', function (req, res) {
    res.send({status: 'OK', name: 'RakeshSherwal', password: 'pioneer'});
});


server.listen(9092, function (err) {
    console.log('Listening on 9092');
});