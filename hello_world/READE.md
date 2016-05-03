需要載路的模組

express =< 4.10.2

步驟

先將載入的模組定一個變數

var express = require('express');

為什麼要將express函數定義成一個變數呢？
var app = express();
是建立一個物件
那為什麼其他的中介軟體不用建立物件的
假設：var app =  express()是建立一的實體

然後透過 app.get()加入一些參數




process.env.PORT
<!--  process.env.PORT ？-->
app.get的方式呢？


https://987.tw/2014/03/08/export-this-node-jsmo-zu-de-jie-mian-she-ji-mo-shi/

https://cnodejs.org/topic/531c1e06a705148e2b000ae6

監聽app.listen(app.get('port'),function(){
  console.log("Express server listening on port" + app.get('port'));
  });
