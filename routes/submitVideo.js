var express = require('express');
var router = express.Router();

var path = require('path');

var connection = require('../modules/connection');
var pg = require('pg');

router.post('/', function(req, res, next) {

  var updateDare = {
    video_link: req.body.video_link,
    id : req.body.id
  };


  pg.connect(connection, function(err, client, done) {
    var queryText = "UPDATE dares SET video_link = '";
    queryText = queryText + updateDare.video_link;
    queryText = queryText + "' WHERE id = ";
    queryText = queryText + updateDare.id;
    console.log( "doing query: ",queryText );
    client.query( queryText,
      // [updateDare.video_link, updateDare.id],
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
