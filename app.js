var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/web/index');
const authRouter = require('./routes/web/auth');
//导入接口路由文件 
const accountRouter = require('./routes/api/account');
const authApiRouter = require('./routes/api/auth');
//导入以下两个包（用于写入session）
const session = require('express-session');
const MongoStore = require('connect-mongo');
//导入配置项（不将路径、端口号、数据库等写死）
const {DBHOST,DBPORT,DBNAME} = require('./config/config')

var app = express();
//设置session的中间件
app.use(session({
  name: 'sid', //设置cookie的name，默认值是：connect.sid
  secret: 'atguigu', //参与加密的字符串（秘钥）（又称签名）
  saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
  resave: true, //是否在每次请求时重新保存session（session有生命周期）
  //设置数据库的连接配置
  store: MongoStore.create({
      mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}` 
  }),
  //设置响应cookie的特性
  cookie: {
      httpOnly: true, //前端无法通过 JS 操作访问cookie（为了安全性）
      //maxAge同时设置了 cookie 和 session 的生命周期（7天）
      maxAge: 1000 * 60 * 60 * 24 * 7
  }
}));
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', authRouter);
//使用接口路由文件 
app.use('/api', accountRouter);
app.use('/api', authApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('404');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
