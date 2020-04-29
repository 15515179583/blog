const express = require('express')
const auth = require('../middleware/auth')
const website = require('../middleware/website')
const photo = require('../middleware/photos')

const shareApp = express()
shareApp.use(auth.getUser)
shareApp.use(website.getInfo)

shareApp.get('/',[photo.getAllList],(req,res) =>{
    let {user,website,photos} = req
    res.render('share',{user:user,website:website,photos:photos})
})

module.exports = shareApp