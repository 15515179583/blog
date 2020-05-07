const express = require('express')
const auth = require('../middleware/auth')
const website = require('../middleware/website')
const project = require('../middleware/project')
const projectApp = express()
projectApp.use(auth.getUser)
projectApp.use(website.getInfo)

projectApp.get('/',project.getAllList,(req,res) =>{
    let {user,website,projects} = req
    res.render('projects',{user:user,website:website,projects:projects})
})

module.exports = projectApp