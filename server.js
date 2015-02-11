(function () {
  'use strict';

  var express = require('express'),
      bodyParser = require('body-parser'),
      http = require('http'),
      cors = require('cors');

  var app = express();
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(cors());
  app.set('port', 3000);

  var data = [
    {"firstName": "Jeff", "lastName": "Winger"},
    {"firstName": "Troy", "lastName": "Barnes"},
    {"firstName": "Britta", "lastName": "Perry"},
    {"firstName": "Abed", "lastName": "Nadir"}
  ];

  app.get('/users', function (req, res) {
    res.status(200).json(data);
  });

  app.post('/users', function (req, res) {
    data.push(req.body);
    res.status(200).send(data);
  });

  http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
  });
})();
