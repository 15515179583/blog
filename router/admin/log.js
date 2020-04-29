const express = require('express')
const article = require('../../middleware/article')

const logApp = express() 

logApp.get('/',(req,res)=>{
    res.render('admin/log/index',{user:req.user})
})


module.exports = logApp