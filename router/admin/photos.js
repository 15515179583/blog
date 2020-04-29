const express = require('express')
const photos = require('../../middleware/photos')

const photosApp = express() 
/*
photosApp.get('/',photos.getList,(req,res)=>{
    let {photos} = req
    res.render('admin/photos/index',{user:req.user,photos:photos})
})*/
photosApp.get('/',photos.getCount,(req,res,next)=>{
    let {photosCount} = req

    let size = 5
    req.page = {}
    req.page.count = photosCount
    req.page.total = Math.ceil(req.page.count/size)
    req.page.p = req.query.p ? req.query.p:1
    req.page.p = req.page.p > req.page.total ? req.page.total : req.page.p
    req.page.p = req.page.p < 1  ? 1 : req.page.p

    res.start = (req.page.p-1) * size
    res.size = size
    next()
}, [photos.getPage,photos.getList],(req,res)=>{
    let {user ,pageList,page} = req
    page.list = pageList
    res.render('admin/photos/index',{user:user,page:page})
})

photosApp.get('/del',photos.del,(req,res) =>{
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

photosApp.get('/add',(req,res)=>{
    let {user} = req
    res.render('admin/photos/add',{user:user,code:''})
})

photosApp.post('/add',photos.add,(req,res)=>{
    let {user} = req
    if(req.insertId) {
        res.render('admin/photos/add',{user:user,code:11})
    } else {
        res.render('admin/photos/add',{user:user,code:10})
    }
})
photosApp.get('/edit/:id',photos.getPhotoById,(req,res)=>{
    let {user,photo} = req
    res.render('admin/photos/edit',{user:user,photo:photo})
})

photosApp.post('/edit',photos.edit,(req,res)=>{
    if(req.affectedRows >0) {
        res.render('admin/alert',{message:'编辑成功',url:'/admin/photos'})
    } else {
        res.render('admin/alert',{message:'编辑失败',url:'/admin/photos/edit/'+req.body.id})
    }
})

module.exports = photosApp