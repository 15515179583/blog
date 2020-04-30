const Links = require('../model/links')
module.exports = {
    getList: (req,res,next) => {
        Links.getList().then(results =>{
            req.links = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getAllList: (req,res,next) => {
        Links.getList(true).then(results =>{
            req.links = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    del:(req,res,next) =>{
        let {id} = req.query
        Links.del(id).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    setName:(req,res,next) =>{
        let {id,name} = req.query
        Links.setName(id,name).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    setLinkUrl:(req,res,next) =>{
        let {id,linkUrl} = req.query
        Links.setLinkUrl(id,linkUrl).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    setDisplay:(req,res,next) =>{
        let {id,display} = req.query
        Links.setDisplay(id,display).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    add:(req,res,next) =>{
        let {name,linkUrl} = req.body
        Links.add(name,linkUrl).then(results =>{
            req.insertId = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
}