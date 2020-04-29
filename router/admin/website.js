const express = require('express')
const website = require('../../middleware/website')

const websiteApp = express() 
websiteApp.use(website.getInfo)

websiteApp.get('/',(req,res)=>{
    let {user,website} = req
    res.render('admin/website/index',{user:user,website:website})
})

websiteApp.post('/edit',website.edit,(req,res) => {
    console.log(req.affectedRows)
    if(req.affectedRows >0) {
        res.render('admin/alert',{message:'编辑成功',url:'/admin/website'})
    } else {
        res.render('admin/alert',{message:'编辑失败',url:'/admin/website'})
    }
})

module.exports = websiteApp