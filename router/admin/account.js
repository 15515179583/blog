const express = require('express')
const user = require('../../middleware/user')

const accountApp = express() 

accountApp.get('/',(req,res)=>{
    res.render('admin/account/index',{user:req.user})
})

accountApp.post('/edit',user.edit,(req,res)=>{
    if(req.affectedRows >0) {
        res.render('admin/alert',{message:'用户信息修改成功',url:'/admin/account'})
    } else {
        res.render('admin/alert',{message:'用户信息修改失败',url:'/admin/account'})
    }
})


module.exports = accountApp