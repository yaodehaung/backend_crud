var crypto = require('crypto'),
  fs = require('fs'),
  Post = require('../models/post.js');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendfile('views/crud.html');
  })

  app.post('/post', function(req, res) {
    var post = new Post(req.body.name, req.body.post);
    post.save(function(err) {
      if (err) {
        return res.redirect('/');
      }

      res.send("成功"); //发表成功跳转到主页
    });
  });

  app.get('/archive', function(req, res) {
    Post.getArchive(function(err, posts) {
      if (err) {
        return res.redirect('/');
      }
      res.json({
        title: '存檔',
        posts: posts,

      });
    });
  });



  app.get('/archive/:name', function(req, res) {
    Post.getOne(req.params.name, function(err, post) {
      if (err) {

        return res.send("失敗");
      }
      res.json({
        post: post

      });
    });
  });

  app.post('/edit/:name', function(req, res) {

    Post.update(req.params.name, req.body.post, function(err) {
      if (err) {

        return res.redirect(url); //出错！返回文章页
      }
      
      res.send('成功');
    });
  });

  app.get('/remove/:name', function(req, res) {
    Post.remove(req.params.name, function(err) {
      if (err) {

        return res.redirect('back');
      }
      res.send('刪除成功');
    });
  });


};
