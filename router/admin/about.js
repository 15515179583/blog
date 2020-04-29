const express = require('express')
const about = require('../../middleware/about')
const aboutApp = express() 

aboutApp.get('/',[about.getAbout],(req,res)=>{
    let {user,about} = req
    res.render('admin/about/index',{user:user,about:about,code:''})
})
aboutApp.post('/edit',[about.edit],(req,res)=>{
    if(req.affectedRows >0) {
        res.render('admin/alert',{message:'编辑成功',url:'/admin/about'})
    } else {
        res.render('admin/alert',{message:'编辑失败',url:'/admin/about'})
    }
})

module.exports = aboutApp