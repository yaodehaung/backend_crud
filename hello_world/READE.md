
   npm init

首先要先將目錄給npm init 後,這是為了讓這個目錄產生出一個package.json檔案。
這個檔案可以在安裝時,一起將你安裝的檔案版本以及名稱紀錄在這個檔案中。

package.json 除了紀錄安裝模組名稱以及版本,他還可以讓未安裝這個專案的人透過 npm install ,
   前提是目錄中一定要有package.json

 var express = require("express");

 nodejs 模組在使用時必須先載入。

 var app = express();

 透過上面的程式建立一個物件

 app.set('port', process.env.PORT || 3000);

 如果用console.log(app.get('port'));
 會等於3000
 
 將port設為等於 process.env.PORT || 3000
  說明：如果預設沒有設定port將會以3000port
  process.env.PORT的意思是 環境預設的port


  app.get('/'function(res,req){
    req.send("hello world");
    });

  app.listen(app.get('port'),function(){
    console.log('Express server listening on port ' + app.get('port'));
    });


QA:   [Q]為什麼程式要寫var express = require('express'); ?

      [A]雖然一開始有安裝很多套件,但這些套件不會自動載入,


https://987.tw/2014/03/08/export-this-node-jsmo-zu-de-jie-mian-she-ji-mo-shi/

https://cnodejs.org/topic/531c1e06a705148e2b000ae6
