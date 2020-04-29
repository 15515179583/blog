const Tabs = require('../model/tabs')
module.exports = {
    getList: (req,res,next) => {
        Tabs.getList().then(results =>{
            req.tabs = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getTabs:(req,res,next) =>{
        let id = req.params.id
        Tabs.getTabs(id).then(results =>{
            req.article_tabs = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    }
}