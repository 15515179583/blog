const Photos = require('../model/photos')
module.exports = {
    getList: (req,res,next) => {
        Photos.getList(9).then(results =>{
            req.photos = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getAllList: (req,res,next) => {
        Photos.getList().then(results =>{
            /*let photos = {}
            photos.list1 = []
            photos.list2 = []
            photos.list3 = []
            photos.list4 = []
            results.forEach((result,index) => {
                if(index%4==0) {
                    photos.list1.push(result)
                } else if (index%4==1) {
                    photos.list2.push(result)
                } else if (index%4==2) {
                    photos.list3.push(result)
                } else if (index%4==3) {
                    photos.list4.push(result)
                }
            });*/
            req.photos = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getPhotoById:(req,res,next) =>{
        let id = req.params.id
        Photos.getPhotoById(id).then(results =>{
            req.photo = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getCount: (req,res,next) => {
        Photos.getCount().then(results =>{
            req.photosCount = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getPage: (req,res,next) => {
        Photos.getPage(res.start,res.size).then(results =>{
            req.pageList = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    add:(req,res,next) =>{
        let {title,content} = req.body
        let photo = {
            title:title,
            content:content,
            photoUrl: req.uploadUrls ? req.uploadUrls[0]:null,
        }

        Photos.add(photo).then(results =>{
            req.insertId = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    del:(req,res,next) =>{
        let {id} = req.query
        Photos.del(id).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    edit:(req,res,next) =>{
        let {title,content,id,photoUrl} = req.body
        let photo = {
            title:title,
            content:content,
            //thumbnail: req.uploadUrl ? req.uploadUrl:thumbnail,
            photoUrl: req.uploadUrls ? req.uploadUrls[0]:photoUrl,
            id:id
        }
        Photos.edit(photo).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
}