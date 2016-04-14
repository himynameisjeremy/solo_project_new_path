var express = require('express');
var router = express.Router();

var path = require('path');

var connection = require('../modules/connection');
var pg = require('pg');

router.post('/', function(req, res, next) {

  var updateDare = {
    id : req.body.id
  };

  // var id = req.body.id;


  pg.connect(connection, function(err, client, done) {

    var queryText = "UPDATE dares SET dare_status = 'complete' WHERE id = ";
    queryText = queryText + updateDare.id;
    console.log( "doing query: ",queryText );
    client.query( queryText,
        function (err, result) {
          client.end();

          if(err) {
            console.log("Error inserting video_link into Dare: ", err);
            next(err);
          } else {
            res.redirect('/');
          }
        });
  });

});

module.exports = router;
