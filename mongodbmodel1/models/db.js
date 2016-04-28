var settings = require('../settings'),
  // 先將mongodb port settting 以及資料庫名稱 引進來
  Db = require('mongodb').Db,
  Connection = require('mongodb').Connection,
  Server = require('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, settings.port), {
  safe: true
});
