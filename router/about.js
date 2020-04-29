const express = require('express')
const auth = require('../middleware/auth')
const website = require('../middleware/website')
const photo = require('../middleware/photos')
const about = require('../middleware/about')

const aboutApp = express()

aboutApp.use(auth.getUser)
aboutApp.use(website.getInfo)

aboutApp.get('/',[photo.getList,about.getAbout],(req,res) =>{
    let {user,website,photos,about} = req
    res.render('about',{user:user,website:website,photos:photos,about:about})
})

module.exports = aboutApp