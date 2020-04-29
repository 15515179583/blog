const Pv = require('../model/pv')
module.exports = {
    getTotal: (req,res,next) => {
        Pv.getTotal().then(results =>{
            req.pvTotal = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getAll: (req,res,next) => {
        Pv.getAll().then(results =>{
            req.pvs = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
}