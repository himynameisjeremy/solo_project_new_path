var express = require('express');
var router = express.Router();
var passport = require('passport');

var path = require('path');

var encryptLib = require('../modules/encryption');
var connection = require('../modules/connection');
var pg = require('pg');

// router.get('/', function(req, res, next) {
//     res.sendFile(path.resolve(__dirname, '../public/views/create.html'));
// });

router.post('/', function(req, res, next) {

  var createDare = {
    title: req.body.title,
    description: req.body.description,
    pledge: req.body.pledge
  };
  console.log('new dare:', createDare);

  pg.connect(connection, function(err, client, done) {
    client.query("INSERT INTO dares (title, description, pledge) VALUES ($1, $2, $3) RETURNING id",
      [createDare.title, createDare.description, createDare.pledge],
        function (err, result) {
          client.end();

          if(err) {
            console.log("Error inserting data into Dare: ", err);
            next(err);
          } else {
            res.redirect('/');
          }
        });
  });

});

module.exports = router;
