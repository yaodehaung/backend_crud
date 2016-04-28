var crypto = require('crypto'),
    fs = require('fs'),
    Post = require('../models/post.js');

module.exports = function(app) {

  app.get('/',function(req,res){
    res.sendfile('views/crud.html');
  })

  app.post('/post', function (req, res) {
    var tags = [req.body.tag1, req.body.tag2, req.body.tag3],
        post = new Post( req.body.title, tags, req.body.post);
    post.save(function (err) {
      if (err) {
        req.flash('error', err);
        return res.redirect('/');
      }
      req.flash('success', '发布成功!');
      res.send("成功");//发表成功跳转到主页
    });
  });

  
  app.get('/archive', function (req, res) {
    Post.getArchive(function (err, posts) {
      if (err) {
        req.flash('error', err);
        return res.redirect('/');
      }
      res.json( {
        title: '存档',
        posts: posts,

      });
    });
  });

  app.get('/archive/:name', function (req, res) {
     Post.getOne( req.params.name, function (err, post) {
       if (err) {
         req.flash('error', err);
         return res.send("失敗");
       }
       res.json( {
         post: post

       });
     });
   });

  app.post('/edit/:name', function (req, res) {

    Post.update( req.params.name, req.body.post, function (err) {
      if (err) {
        req.flash('error', err);
        return res.redirect(url);//出错！返回文章页
      }
      req.flash('success', '修改成功!');
      res.send('成功');
    });
  });

  app.get('/remove/:name', function (req, res) {
    Post.remove(  req.params.name, function (err) {
      if (err) {
        req.flash('error', err);
        return res.redirect('back');
      }
      res.send('刪除成功');
    });
  });





};
