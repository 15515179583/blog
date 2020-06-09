const express = require('express')
const session = require('cookie-session')
const multer = require('multer')
const fs = require('fs')
const path = require('path')

const app = express()

const upload = multer({
    dest:'./static/upload',
    limits:{
        fileSize: 1024*1024*2
    }
})

app.set('view engine', 'html')
app.set('views', `${__dirname}/views`)
app.engine('html', require('ejs').renderFile)

app.use(express.static('static'))


app.use(express.urlencoded({extended:true}))
app.use(session({
    keys:['secret'],
    maxAge: 1000*60*60
}))
// app.use('/',require('./router/index'))
// app.use('index',require('./router/index'))

app.use(/\/(index)?/,require('./router/index'))
app.use('/article',require('./router/article'))
app.use('/search',require('./router/search'))
app.use('/about',require('./router/about'))
app.use('/share',require('./router/share'))
app.use('/gbook',require('./router/gbook'))
app.use('/project',require('./router/project'))

app.use('/user',require('./router/user'))

app.use('/admin/?*',require('./middleware/auth').allowToAdmin)
app.use('/admin/article/?*',require('./middleware/auth').allowToIt)
app.use('/admin/website/?*',require('./middleware/auth').allowToIt)
app.use('/admin/photos/?*',require('./middleware/auth').allowToIt)
app.use('/admin/category/?*',require('./middleware/auth').allowToIt)
app.use('/admin/links/?*',require('./middleware/auth').allowToIt)
app.use('/admin/users/?*',require('./middleware/auth').allowToIt)
app.use('/admin/about/?*',require('./middleware/auth').allowToIt)
app.use('/admin/project/?*',require('./middleware/auth').allowToIt)

app.post('/admin/article/ckeditor',upload.single('upload'),(req,res,next)=>{
    let {file} = req
    if(file){
        let extname = path.extname(file.originalname)
        fs.renameSync(file.path,file.path+extname)
        req.uploadUrl = '/upload/'+file.filename+extname
    }
    next()
})

app.post('/admin/*',upload.array('upload',5),(req,res,next)=>{
    let files = req.files
    //console.log(req.files)
    if(files) {
        if(files.length){
            let filesUrl = []
            for (let i in files) {   
                let file = files[i]
                let fileInfo = {}
                let extname = path.extname(file.originalname)
                fs.renameSync(file.path,file.path+extname)
                file.uploadUrl = '/upload/'+file.filename+extname
                filesUrl.push(file.uploadUrl)
            }
            req.uploadUrls = filesUrl
        }
    }
    next()
})

app.use(/\/admin\/(index)?/,require('./router/admin/index'))
app.use('/admin/article',require('./router/admin/article'))
app.use('/admin/category',require('./router/admin/category'))
app.use('/admin/log',require('./router/admin/log'))
app.use('/admin/account',require('./router/admin/account'))
app.use('/admin/website',require('./router/admin/website'))
app.use('/admin/links',require('./router/admin/links'))
app.use('/admin/photos',require('./router/admin/photos'))
app.use('/admin/users',require('./router/admin/users'))
app.use('/admin/about',require('./router/admin/about'))
app.use('/admin/project',require('./router/admin/project'))


app.listen(80)