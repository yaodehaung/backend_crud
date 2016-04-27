var express = require('express'),
  path = require("path");

var app = express();



app.set('port', process.env.PORT || 3000);

app.set('views',path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(res, req) {
  req.send("hello world");
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
