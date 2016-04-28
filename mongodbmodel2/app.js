var path = require('path'),
    express = require('express'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    multer  = require('multer');

// require routes
var routes = require('./routes/index'),
    settings = require('./settings');

// setting err message


// 將express函數轉成變數
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

routes(app);


app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
