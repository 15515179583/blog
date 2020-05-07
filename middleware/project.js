const Project = require('../model/project')
module.exports = {
    getList: (req,res,next) => {
        Project.getList(9).then(results =>{
            req.projects = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getAllList: (req,res,next) => {
        Project.getList().then(results =>{
            req.projects = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getprojectById:(req,res,next) =>{
        let id = req.params.id
        Project.getprojectById(id).then(results =>{
            req.project = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getCount: (req,res,next) => {
        Project.getCount().then(results =>{
            req.projectCount = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getPage: (req,res,next) => {
        Project.getPage(res.start,res.size).then(results =>{
            req.pageList = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    add:(req,res,next) =>{
        let {title,content,linkUrl} = req.body
        let project = {
            title:title,
            content:content,
            linkUrl:linkUrl?linkUrl:'JavaScript:void(0)',
            photoUrl: req.uploadUrls ? req.uploadUrls[0]:'/images/project_img.jpg',
        }

        Project.add(project).then(results =>{
            req.insertId = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    del:(req,res,next) =>{
        let {id} = req.query
        Project.del(id).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    edit:(req,res,next) =>{
        let {title,content,id,photoUrl,linkUrl} = req.body
        let project = {
            title:title,
            content:content,
            linkUrl:linkUrl,
            //thumbnail: req.uploadUrl ? req.uploadUrl:thumbnail,
            photoUrl: req.uploadUrls ? req.uploadUrls[0]:photoUrl,
            id:id
        }
        Project.edit(project).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
}