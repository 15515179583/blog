const express = require('express')
const user = require('../middleware/user')
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

module.exports = userApp