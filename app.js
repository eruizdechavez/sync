var express = require('express'),
  http = require('http'),
  path = require('path'),
  fs = require('fs'),
  v0 = require('./routes/v0'),
  v1 = require('./routes/v1'),
  v2 = require('./routes/v2');

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

v0.initialize(app);
v1.initialize(app);
v2.initialize(app);

app.get('/', function (req, res) {
  return res.redirect('/v2');
});

app.get('/v:v', function (req, res) {
  fs.readFile('./public/index.html', function (err, html) {
    html = html.toString().replace(/{{v}}/g, req.params.v);
    return res.send(html);
  });
});

var server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});