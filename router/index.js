const express = require('express')
const article = require('../middleware/article')
const category = require('../middleware/category')
const auth = require('../middleware/auth')
const link = require('../middleware/links')
const website = require('../middleware/website')
const photo = require('../middleware/photos')

const indexApp = express()

indexApp.use(auth.getUser)
indexApp.use(website.getInfo)
/*
indexApp.get('/',[article.getHot,article.getList,category.getList,link.getList,photo.getList], (req,res)=>{
    let {hots,articles,categories,user,links,website,photos} = req
    res.render('index',{hots:hots,articles:articles,categories:categories,user:user,links:links,website:website,photos:photos})
})
*/
indexApp.get('/',article.getCount,(req,res,next)=>{
    let {articleCount} = req
    let size = 12
    req.page = {}
    req.page.count = articleCount
    req.page.total = Math.ceil(req.page.count/size)
    req.page.p = req.query.p ? req.query.p:1
    req.page.p = req.page.p > req.page.total ? req.page.total : req.page.p
    req.page.p = req.page.p < 1  ? 1 : req.page.p
    res.start = (req.page.p-1) * size
    res.size = size
    next()
}, [article.getPage,category.getList,article.getHot,article.getList,link.getList,photo.getList],(req,res)=>{
    let {hots,articles,categories,user,links,website,photos,pageList,page} = req
    page.list = pageList
    res.render('index',{page:page,hots:hots,articles:articles,categories:categories,user:user,links:links,website:website,photos:photos})
})

module.exports = indexApp