const express = require('express')
const auth = require('../middleware/auth')
const website = require('../middleware/website')
const photo = require('../middleware/photos')
const gbook = require('../middleware/gbook')
const gbookApp = express()

gbookApp.use(auth.getUser)
gbookApp.use(website.getInfo)
/*
gbookApp.get('/',[photo.getList,gbook.getList],(req,res) =>{
    let {user,website,photos,gbooks} = req
    res.render('gbook',{user:user,website:website,photos:photos,gbooks:gbooks})
})
*/
gbookApp.get('/',gbook.getCount,(req,res,next)=>{
    let {gbooksCount} = req
    let size = 10
    req.page = {}
    req.page.count = gbooksCount
    req.page.total = Math.ceil(req.page.count/size)
    req.page.p = req.query.p ? req.query.p:1
    req.page.p = req.page.p > req.page.total ? req.page.total : req.page.p
    req.page.p = req.page.p < 1  ? 1 : req.page.p
    res.start = (req.page.p-1) * size
    res.size = size
    next()
}, [gbook.getPage,photo.getList],(req,res)=>{
    let {user,website,photos,pageList,page} = req
    page.list = pageList
    res.render('gbook',{user:user,website:website,photos:photos,page:page})
})

gbookApp.post('/add',gbook.add,(req,res) =>{
    if(req.insertId){
        res.json({
            code:1,
            msg:'留言成功'
        })
    } else {
        res.json({
            code:0,
            msg:'留言失败'
        })
    }
})
module.exports = gbookApp