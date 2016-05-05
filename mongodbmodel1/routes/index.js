var Post = require('../models/post.js');

module.exports = function(app) {

  app.get('/',function(req,res){
    res.sendfile('views/crud.html');
  })

  app.post('/post', function (req, res) {
    var post = new Post( req.body.title, req.body.post);
    post.save(function (err) {
      if (err) {
        return res.redirect('/');
      }

      res.send("成功");//发表成功跳转到主页
    });
  });

  app.get('/archive', function (req, res) {
    Post.getArchive(function (err, posts) {
      if (err) {
        return res.redirect('/');
      }
      res.json( {
        title: '存檔',
        posts: posts,

      });
    });
  });

};
