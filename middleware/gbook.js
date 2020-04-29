const Gbooks = require('../model/gbook')
module.exports = {
    getList: (req,res,next) => {
        Gbooks.getList().then(results =>{
            req.gbooks = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    add:(req,res,next) =>{
        let {content,user} = req.body
        Gbooks.add(content,user).then(results =>{
            req.insertId = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getCount: (req,res,next) => {
        Gbooks.getCount().then(results =>{
            req.gbooksCount = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getPage: (req,res,next) => {
        Gbooks.getPage(res.start,res.size).then(results =>{
            req.pageList = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
}