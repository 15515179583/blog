const express = require('express')
const category = require('../../middleware/category')

const categoryApp = express() 

categoryApp.get('/',category.getList,(req,res)=>{
    let {categories} = req
    res.render('admin/category/index',{user:req.user,categories:categories})
})
categoryApp.get('/del',category.del,(req,res) =>{
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
categoryApp.get('/setname',category.setName,(req,res) =>{
    if(req.affectedRows > 0){
        res.json({
            code:1,
            msg:'修改类目名称成功'
        })
    } else {
        res.json({
            code:0,
            msg:'修改类目名称失败'
        })
    }
})
categoryApp.get('/setindex',category.setIndex,(req,res) =>{
    if(req.affectedRows > 0){
        res.json({
            code:1,
            msg:'修改类目index成功'
        })
    } else {
        res.json({
            code:0,
            msg:'修改类目index失败'
        })
    }
})
categoryApp.post('/add',category.add,(req,res) =>{
    console.log(123)
    if(req.insertId){
        res.json({
            code:1,
            msg:'类目添加成功'
        })
    } else {
        res.json({
            code:0,
            msg:'类目添加失败'
        })
    }
})
module.exports = categoryApp