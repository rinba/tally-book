const express = require('express');
//导入用户的模型对象
const UserModel = require('../../models/UserModel');
//导入md5包（加密）
const md5 = require('md5');

//创建路由对象
const router = express.Router(); 

//创建路由规则，记账本的注册页
router.get('/reg',(req,res)=>{
    //响应HTML内容
    res.render('auth/reg'); //使用模板引擎，返回注册页
});

//用户注册
router.post('/reg',(req,res)=>{
    //做表单验证（提醒用户是否漏填、填错）
    //获取请求体的数据
    UserModel.create({...req.body,password:md5(req.body.password)},(err,data)=>{
        //注册失败时
        if(err){
            res.status(500).send('注册失败，请稍后再试');
            return;
        }
        //注册成功时
        res.render('success',{msg:'注册成功',url:'/login'});
    });
});

//记账本的登录页
router.get('/login',(req,res)=>{
    //响应HTML内容
    res.render('auth/login'); //使用模板引擎，返回登录页
});

//用户登录
router.post('/login',(req,res)=>{
    //获取用户名和密码
    let {username,password} = req.body;
    //查询数据库
    UserModel.findOne({username:username,password:md5(password)},(err,data)=>{
        //登录失败时
        if(err){
            res.status(500).send('登录失败，请稍后再试');
            return;
        }
        //判断data
        if(!data){
            return res.send('账号或密码错误');
        }
        //写入session
        req.session.username = data.username;
        req.session._id = data._id;
        //登录成功时
        res.render('success',{msg:'登录成功',url:'./account'});
    });   
});

//退出登录
router.post('/logout',(req,res)=>{
    //销毁session
    req.session.destroy(()=>{
        res.render('success',{msg:'退出成功',url:'/login'});
    })
});

module.exports = router;
