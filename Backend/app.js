var Express = require('express');
var Logger = require('morgan');
var BodyParser = require('body-parser');

var Routes = require('./routes/index');

var App = Express();

// uncomment after placing your favicon in /public
App.use(Logger('dev'));
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({ extended: false }));

App.use('/', Routes);

// catch 404 and forward to error handler
App.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (App.get('env') === 'development') {
    App.use(function (err, req, res, next) {
        var msg = err.message;
        var error = JSON.stringify(err);
        res.status(err.status || 500).send(JSON.stringify({
            message: msg,
            error: error
        }));
    });
}

// production error handler
// no stacktraces leaked to user
App.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', {
        message: err.message,
        error: {}
    });
});


module.exports = App;
