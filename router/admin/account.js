const express = require('express')
const user = require('../../middleware/user')
const links = require('../../middleware/links')
const accountApp = express() 

accountApp.get('/',(req,res)=>{
    res.render('admin/account/index',{user:req.user})
})
accountApp.get('/link',(req,res)=>{
    res.render('admin/account/link',{user:req.user})
})

accountApp.post('/addlink',[user.setLink,links.add],(req,res)=>{
    if(req.affectedRows >0) {
        req.session.user.link = '1'
        res.render('admin/alert',{message:'友链申请成功',url:'/admin/account/link'})
    } else {
        res.render('admin/alert',{message:'友链申请失败',url:'/admin/account/link'})
    }
})

accountApp.post('/edit',user.edit,(req,res)=>{
    if(req.affectedRows >0) {
        res.render('admin/alert',{message:'用户信息修改成功',url:'/admin/account'})
    } else {
        res.render('admin/alert',{message:'用户信息修改失败',url:'/admin/account'})
    }
})


module.exports = accountApp