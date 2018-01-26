var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     =  80; // set our port

var mongoose   = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testAPI'); // connect to our database
var db = mongoose.connection;
//db.on('connect', function () { console.log('connected'); });
var Device     = require('./Schema');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();


router.post('/registration', function(req, res) {

    var device = new Device();
    device.test = req.body.test;

    device.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'TEST SAVE!' });
    });


  });

app.listen(port);
console.log('Server run ' + port);