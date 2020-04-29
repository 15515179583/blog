const express = require('express')
const article = require('../../middleware/article')
const category = require('../../middleware/category')
const articleApp = express() 

articleApp.get('/',article.getCount,(req,res,next)=>{
    let {articleCount} = req

    let size = 5
    req.page = {}
    req.page.count = articleCount
    req.page.total = Math.ceil(req.page.count/size)
    req.page.p = req.query.p ? req.query.p:1
    req.page.p = req.page.p > req.page.total ? req.page.total : req.page.p
    req.page.p = req.page.p < 1  ? 1 : req.page.p

    res.start = (req.page.p-1) * size
    res.size = size
    next()
}, [article.getPage,category.getList],(req,res)=>{
    let {user ,pageList,page,categories} = req
    let {category_id,hot} = req.query

    page.list = pageList
    res.render('admin/article/index',{user:user,page:page,categories:categories,category_id:category_id,hot:hot})
})

articleApp.get('/sethot',article.setHot,(req,res) =>{
    if(req.affectedRows > 0){
        res.json({
            code:1,
            msg:'设置成功'
        })
    } else {
        res.json({
            code:0,
            msg:'设置失败'
        })
    }
})

articleApp.get('/add',[category.getList],(req,res)=>{
    let {user,categories} = req
    res.render('admin/article/add',{user:user,categories:categories,code:''})
})

articleApp.post('/ckeditor',(req,res)=>{
    if(req.uploadUrl){
        res.json({
            uploaded:true,
            url:req.uploadUrl
        })
    } else {
        res.json({
            uploaded:false,
            arr:{message:'上传失败'}
        })
    }
})

articleApp.post('/add',[article.add,category.getList],(req,res)=>{
    let {user,categories} = req
    if(req.insertId) {
        res.render('admin/article/add',{user:user,categories:categories,code:11})
    } else {
        res.render('admin/article/add',{user:user,categories:categories,code:10})
    }
    
})

articleApp.get('/del',article.del,(req,res) =>{
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

articleApp.get('/edit/:id',[category.getList,article.getArticleById],(req,res)=>{
    let {user,categories,article} = req
    res.render('admin/article/edit',{user:user,categories:categories,article:article})
})

articleApp.post('/edit',[article.edit],(req,res)=>{
    if(req.affectedRows >0) {
        res.render('admin/alert',{message:'编辑成功',url:'/admin/article'})
    } else {
        res.render('admin/alert',{message:'编辑失败',url:'/admin/article/edit/'+req.body.id})
    }
})

module.exports = articleApp