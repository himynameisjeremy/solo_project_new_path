var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
//
var passport = require('./strategies/user_sql.js');
var session = require('express-session');

// Route includes
var index = require('./routes/index');
var user = require('./routes/user');
var register = require('./routes/register');
var create = require('./routes/create');
var darelist = require('./routes/darelist');
var unfinishedlist = require('./routes/unfinishedlist');
var submitVideo = require('./routes/submitVideo');
var pendingList = require('./routes/pendingList');
var judgementIsYes = require('./routes/judgementIsYes');
var judgementIsNyet = require('./routes/judgementIsNyet');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Passport Session Configuration //
app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: {maxage: 60000, secure: false}
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use('/register', register);
app.use('/user', user);
app.use('/create', create);
app.use('/darelist', darelist);
app.use('/unfinishedlist', unfinishedlist);
app.use('/submitVideo', submitVideo);
app.use('/pendingList', pendingList);
app.use('/judgementIsYes', judgementIsYes);
app.use('/judgementIsNyet', judgementIsNyet);
app.use('/', index);

// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/assets'));
app.use(express.static('public/assets/scripts'));
app.use(express.static('public/assets/styles'));
app.use(express.static('public/vendors'));


// App Set //
app.set('port', (process.env.PORT || 5000));

// Listen //
app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});
