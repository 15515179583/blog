const express = require('express')
const nodemailer  = require('nodemailer')
const user = require('../middleware/user')
var mailTransport = nodemailer.createTransport({
    service: 'qq',
    host : '****',//主机地址或域名
    secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
    auth : {
        user : '****',//邮箱用户
        pass : '****'//密钥
    },
});
const userApp = express()

userApp.get('/login',(req,res) =>{
    res.render('login',{msg:'',title:'欢迎登陆',btn:'登录',url:'login'})
})

userApp.get('/logout',(req,res)=>{
    req.session.user = null
    res.render('login',{msg:'用户已退出',title:'欢迎登陆',btn:'登录',url:'login'})
})

userApp.get('/regist',(req,res)=>{
    req.session.user = null
    res.render('login',{msg:'',title:'用户注册',btn:'注册',url:'regist'})
})

userApp.post('/login',user.login,(req,res)=>{})

userApp.post('/regist',user.regist,(req,res)=>{})

userApp.get('/getcode',(req,res,next)=>{
    let code = ""
    for(var i=0;i<6;i++) {
        code += Math.floor(Math.random()*10);
    }
    var options = {
        from: '"smile小站" <2230550672@qq.com>',//发件人
        to: `"smile小站用户" <${req.query.email}>`,//收件人
        subject: '【smile小站验证码】',
        text: '【smile小站验证码】',
        html: `<h1>你好，这是一封来自smile小站的邮件！</h1>
            <p>smile小站欢迎您的到来！</p>
            <p>您的验证码为：${code} </p>
            <p>站点地址：<a href="http://smilestation.info/">http://smilestation.info/</a></p>
        `
    };
    
    mailTransport.sendMail(options, function(err, msg){
        if(err){
            console.log(err); 
            res.json({
                code:0,
                msg:'发送验证码邮件失败'
            })
        }
        else {
            user.setInfo({email:req.query.email,code:code})
            res.json({
                code:1,
                msg:'发送验证码邮件成功'
            })
        }
    });
})

userApp.get('/usevip',user.useVip,(req,res)=>{
    if(req.affectedRows > 0){
        res.json({
            code:1,
        })
    } else {
        res.json({
            code:0,
        })
    }
})
module.exports = userApp
