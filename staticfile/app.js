var express = require('express'),
  path = require("path");

var app = express();


app.set('port', process.env.PORT || 3000);

app.set('views',path.join(__dirname, 'views'));
// console.log(app.get('views'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use  是用來配路徑

app.get('/', function(res, req) {
  req.send("hello world");
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
// app.listion 這個函數 不只有啟動伺服器的功能,
// 還有讓開發者知道是否伺服器有無開成
