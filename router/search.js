const express = require('express')
const article = require('../middleware/article')
const category = require('../middleware/category')
const tabs = require('../middleware/tabs')
const auth = require('../middleware/auth')
const website = require('../middleware/website')

const searchApp = express()
searchApp.use(auth.getUser)
searchApp.use(website.getInfo)
/*
searchApp.get('/',[article.getHot,article.getListByKeyword,category.getList,article.getRanking,tabs.getList], (req,res)=>{
    let {hots,articles,categories,rankings,tabs,user,website} = req
    res.render('list',{hots:hots,articles:articles,categories:categories,rankings:rankings,tabs:tabs,user:user,website:website})
})
*/
searchApp.get('/',article.getCount,(req,res,next)=>{
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
}, [article.getPage,article.getHot,article.getListByKeyword,category.getList,article.getRanking,tabs.getList],(req,res)=>{
    let {hots,articles,categories,rankings,tabs,user,website,page,pageList} = req
    let {keyword} = req.query
    page.list = pageList
    res.render('list',{page:page,hots:hots,articles:articles,categories:categories,rankings:rankings,tabs:tabs,user:user,website:website,keyword:keyword})
})

module.exports = searchApp