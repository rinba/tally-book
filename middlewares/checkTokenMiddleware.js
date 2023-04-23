//检测token的中间件
module.exports = (req,res,next)=>{
  //获取token
  let token = req.get('token');
  //判断是否获取到
  if(!token){
    return res.json({
      code:'2003',
      msg:'token 缺失',
      data:null
    })
  }
  //校验token
  jwt.verify(token,'atguigu',(err,data)=>{
    //检验token是否正确
    if(err){
      return res.json({
        code:'2004',
        msg:'token 校验失败',
        data:null
      })
    }
    //如果token校验成功
    next();
  });
}

