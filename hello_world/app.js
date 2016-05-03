var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

// console.log(app.set('port', process.env.PORT ));

app.get('/',function(res,req){
  req.send("hello world");
});

//
app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// 啟動app.get(port) , 如果有啟動起列印 app.get()
