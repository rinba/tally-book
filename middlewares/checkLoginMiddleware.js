//检测登录（session）的中间件
module.exports = (req,res,next)=>{
    //判断用户在服务端有没有session（有没有提前登录）
    if(!req.session.username){
      return res.redirect('/login'); //没有session的话向登录页跳转
    }
    next();
}
