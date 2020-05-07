const express = require('express')
const project = require('../../middleware/project')

const projectApp = express() 
/*
projectApp.get('/',project.getList,(req,res)=>{
    let {project} = req
    res.render('admin/project/index',{user:req.user,project:project})
})*/
projectApp.get('/',project.getCount,(req,res,next)=>{
    let {projectCount} = req

    let size = 5
    req.page = {}
    req.page.count = projectCount
    req.page.total = Math.ceil(req.page.count/size)
    req.page.p = req.query.p ? req.query.p:1
    req.page.p = req.page.p > req.page.total ? req.page.total : req.page.p
    req.page.p = req.page.p < 1  ? 1 : req.page.p

    res.start = (req.page.p-1) * size
    res.size = size
    next()
}, [project.getPage,project.getList],(req,res)=>{
    let {user ,pageList,page} = req
    page.list = pageList
    res.render('admin/project/index',{user:user,page:page})
})

projectApp.get('/del',project.del,(req,res) =>{
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

projectApp.get('/add',(req,res)=>{
    let {user} = req
    res.render('admin/project/add',{user:user,code:''})
})

projectApp.post('/add',project.add,(req,res)=>{
    let {user} = req
    if(req.insertId) {
        res.render('admin/project/add',{user:user,code:11})
    } else {
        res.render('admin/project/add',{user:user,code:10})
    }
})
projectApp.get('/edit/:id',project.getprojectById,(req,res)=>{
    let {user,project} = req
    res.render('admin/project/edit',{user:user,project:project})
})

projectApp.post('/edit',project.edit,(req,res)=>{
    if(req.affectedRows >0) {
        res.render('admin/alert',{message:'编辑成功',url:'/admin/project/'})
    } else {
        res.render('admin/alert',{message:'编辑失败',url:'/admin/project/edit/'+req.body.id})
    }
})

module.exports = projectApp