const express = require('express')
const article = require('../middleware/article')
const category = require('../middleware/category')
const tabs = require('../middleware/tabs')
const auth = require('../middleware/auth')
const website = require('../middleware/website')
const articleApp = express()

articleApp.use(auth.getUser)
articleApp.use(website.getInfo)

articleApp.get('/list/:id',[article.getListByCategoryId,category.getList,article.getHot,article.getRanking,tabs.getList],(req,res)=>{
    let {articles,categories,hots,rankings,tabs,user,website} = req
    res.render('list',{articles:articles,categories:categories,hots:hots,rankings:rankings,tabs:tabs,user:user,website:website})
})
articleApp.get('/:id',[category.getList,article.getHot,article.getRanking,article.getArticleById,tabs.getList,tabs.getTabs,article.getPrevArticle,article.getNextArticle],(req,res)=> {
    let {categories,hots,rankings,article,tabs,article_tabs,prevArticle,nextArticle,user,website} = req
    res.render('info',{categories:categories,hots:hots,rankings:rankings,article:article,tabs:tabs,article_tabs:article_tabs,prevArticle:prevArticle,nextArticle:nextArticle,user:user,website:website})
})
articleApp.get('/:id/like',article.like,(req,res)=>{
    if(req.affectedRows > 0){
        res.json({
            code:1,
        })
    } else {
        res.json({
            code:0,
        })
    }
})
articleApp.get('/:id/hit',article.hit,(req,res)=>{
    if(req.affectedRows > 0){
        res.json({
            code:1,
        })
    } else {
        res.json({
            code:0,
        })
    }
})
module.exports = articleApp