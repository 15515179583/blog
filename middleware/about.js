const About = require('../model/about')
module.exports = {
    getAbout: (req,res,next) => {
        About.getAbout().then(results =>{
            req.about = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    edit:(req,res,next) =>{
        let {content} = req.body
        About.edit(content).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
}