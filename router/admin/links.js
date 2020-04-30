const express = require('express')
const links = require('../../middleware/links')

const linksApp = express() 

linksApp.get('/',links.getAllList,(req,res)=>{
    let {links} = req
    res.render('admin/links/index',{user:req.user,links:links})
})
linksApp.get('/del',links.del,(req,res) =>{
    if(req.affectedRows > 0){
        res.json({
            code:1,
            msg:'删除成功'
        })
    } else {
        res.json({
            code:0,
            msg:'删除失败'
        })
    }
})
linksApp.get('/setname',links.setName,(req,res) =>{
    if(req.affectedRows > 0){
        res.json({
            code:1,
            msg:'修改友链名称成功'
        })
    } else {
        res.json({
            code:0,
            msg:'修改友链名称失败'
        })
    }
})
linksApp.get('/setlink',links.setLinkUrl,(req,res) =>{
    if(req.affectedRows > 0){
        res.json({
            code:1,
            msg:'修改友链链接成功'
        })
    } else {
        res.json({
            code:0,
            msg:'修改友链链接失败'
        })
    }
})
linksApp.get('/setdisplay',links.setDisplay,(req,res) =>{
    if(req.affectedRows > 0){
        res.json({
            code:1,
            msg:'修改友链状态成功'
        })
    } else {
        res.json({
            code:0,
            msg:'修改友链状态失败'
        })
    }
})
linksApp.post('/add',links.add,(req,res) =>{
    if(req.insertId){
        res.json({
            code:1,
            msg:'友链添加成功'
        })
    } else {
        res.json({
            code:0,
            msg:'友链添加失败'
        })
    }
})
module.exports = linksApp