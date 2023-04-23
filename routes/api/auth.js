const express = require('express');
//导入用户的模型对象
const UserModel = require('../../models/UserModel');
//导入md5包（加密）
const md5 = require('md5');
//导入jwt包
const jwt = require('jsonwebtoken');
//创建路由对象
const router = express.Router(); 

//创建路由规则，用户登录
router.post('/login',(req,res)=>{
    //获取用户名和密码
    let {username,password} = req.body;
    //查询数据库
    UserModel.findOne({username:username,password:md5(password)},(err,data)=>{
        //登录失败时
        if(err){
            res.json({
                code:'2001',
                msg:'数据库读取失败',
                data:null
            })
            return
        }
        //判断data
        if(!data){
            return res.json({ //限制：当用户输入错误时就只返回以下三个内容
                code:'2002',
                msg:'用户名或密码错误',
                data:null
            })
        }
        //创建当前用户的token
        let token = jwt.sign({
            username:data.username,
            _id:data._id,
        },'atguigu',{
            expiresIn:60*60*24*7 //生命周期（7天）
        })
        //响应token
        res.json({
            code:'0000',
            msg:'登录成功',
            data:token
        })
        //登录成功时
        res.render('success',{msg:'登录成功',url:'./account'});
    });   
});

module.exports = router;
