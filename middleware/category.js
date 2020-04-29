const Category = require('../model/category')
module.exports = {
    getList: (req,res,next) => {
        Category.getList().then(results =>{
            req.categories = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getCount: (req,res,next) => {
        Category.getCount().then(results =>{
            req.categoryCount = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    del:(req,res,next) =>{
        let {id} = req.query
        Category.del(id).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    setName:(req,res,next) =>{
        let {id,name} = req.query
        Category.setName(id,name).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    setIndex:(req,res,next) =>{
        let {id,index} = req.query
        Category.setIndex(id,index).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    add:(req,res,next) =>{
        let {name,index} = req.body
        Category.add(name,index).then(results =>{
            req.insertId = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
}