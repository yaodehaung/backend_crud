var mongodb = require('./db'),
  ObjectID = require('mongodb').ObjectID;

//建立一個類別存放post裡面
function Post(name, post) {
  this.name = name;
  this.post = post;
}

module.exports = Post;
// 匯出Post 類別

// 存儲一篇文章及其相關信息
Post.prototype.save = function(callback) {
    // 要存入資料庫檔案

  var post = {
    name: this.name,
    post: this.post,
  };
  //打開資料庫
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    //讀取 posts 集合
    db.collection('posts', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //將檔案插入 posts 集合
      collection.insert(post, {
        safe: true
      }, function(err) {
        mongodb.close();
        if (err) {
          return callback(err); //失败！返回 err
        }
        callback(null); //返回 err 为 null
      });
    });
  });
};


//返回所有文章存档信息
Post.getArchive = function(callback) {
  //打开数据库
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    //读取 posts 集合
    db.collection('posts', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //返回只包含 name、time、title 属性的文档组成的存档数组
      collection.find({}, {
        "name": 1,
        "post": 1
      }).sort({
        time: -1
      }).toArray(function(err, docs) {
        mongodb.close();
        if (err) {
          return callback(err);
        }
        callback(null, docs);
      });
    });
  });
};
