const express = require('express')
const auth = require('../middleware/auth')
const website = require('../middleware/website')

const projectApp = express()
projectApp.use(auth.getUser)
projectApp.use(website.getInfo)

projectApp.get('/',(req,res) =>{
    let {user,website} = req
    res.render('projects',{user:user,website:website})
})

module.exports = projectApp