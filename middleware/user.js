const User = require('../model/user')
let dataInfo = ""
module.exports = {
    setInfo:(info) => {
        dataInfo = info
    },
    login:(req,res,next) =>{
        let {username,password} = req.body
        User.login(username,password).then(result =>{
            if(result) {
                req.session.user = result
                res.redirect('/')
            } else {
                res.render('login',{title:'欢迎登陆',btn:'登录',msg:'登录失败!用户名或密码错误',url:'login'})
            }
            //req.user = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    regist:(req,res,next) =>{
        let {username,password,email,judge} = req.body
        if(password.length<10) {
            res.render('login',{title:'用户注册',btn:'注册',msg:'密码长度应大于等于10位',url:'regist'})
            return
        } else if(dataInfo.email !=email || dataInfo.code!=judge) {
            res.render('login',{title:'用户注册',btn:'注册',msg:'验证码错误',url:'regist'})
            return
        }
        User.regist(username,password,email).then(result =>{
            if(result) {
                res.render('login',{title:'欢迎登陆',btn:'登录',msg:'注册成功，请登录',url:'login'})
            } else {
                res.render('login',{title:'用户注册',btn:'注册',msg:'注册失败',url:'regist'})
            }
            //req.user = results
            next()
        }).catch(err =>{
            res.render('login',{title:'用户注册',btn:'注册',msg:'此用户已注册',url:'regist'})
            next(err)
        })
    },
    lastLoginTime:(req,res,next) =>{
        User.lastLoginTime().then(result =>{
            req.lastLoginTime = result
            next()
        }).catch(err =>{
            next(err)
        })
    },
    edit:(req,res,next) =>{
        let {username,password} = req.body
        let user = {
            username:username,
            password:password,
            user_img: req.uploadUrls ? req.uploadUrls[0]:user_img,
            admin: req.user.admin
        }
        //console.log(user)
        User.edit(user).then(result =>{
            req.session.user = user
            //console.log(user)
            req.affectedRows = result
            //User.login(user.username,user.password)
            next()
        }).catch(err =>{
            next(err)
        })
    },
    getList: (req,res,next) => {
        User.getList().then(results =>{
            req.users = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    del:(req,res,next) =>{
        let {id} = req.query
        User.del(id).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    setAdmin:(req,res,next) =>{
        let {id,admin} = req.query
        User.setAdmin(id,admin).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    setLink:(req,res,next) =>{
        let {username} = req.body
        User.setLink(username).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
}