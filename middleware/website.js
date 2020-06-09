const Website= require('../model/website')
module.exports = {
    getInfo: (req,res,next) => {
        Website.getInfo().then(results =>{
            req.website = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    edit: (req,res,next) => {
        let {name,logo,keywords,beian,user,wx,message,about_content,about_img,qq,csdn,github,vipTime} = req.body

        let website = {
            name:name,
            logo: req.uploadUrls ? req.uploadUrls[0]:logo,
            keywords:keywords,
            beian:beian,
            user:user,
            message:message,
            about_content:about_content,
            about_img:req.uploadUrls ? req.uploadUrls.length>1?req.uploadUrls[1]:about_img:about_img,
            wx: req.uploadUrls ? req.uploadUrls.length>2?req.uploadUrls[2]:wx:wx,
            csdn:csdn,
            github:github,
            qq:qq,
            vipTime:vipTime
        }
        Website.edit(website).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
}