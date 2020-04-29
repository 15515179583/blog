const Article = require('../model/article')
module.exports = {
    getHot: (req,res,next) => {
        Article.getHot(8).then(results =>{
            req.hots = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getList: (req,res,next) => {
        Article.getList().then(results =>{
            req.articles = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getListByCategoryId: (req,res,next) => {
        let id = req.params.id
        Article.getListByCategoryId(id).then(results =>{
            req.articles = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    /*getListByTabsId: (req,res,next) => {
        let id = req.params.id
        Article.getListByTabsId(id).then(results =>{
            req.articles = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },*/
    getRanking: (req,res,next) => {
        Article.getRanking().then(results =>{
            req.rankings = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getListByKeyword: (req,res,next) => {
        let keyword = req.query.keyword
        Article.getListByKeyword(keyword).then(results =>{
            req.articles = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getArticleById:(req,res,next) =>{
        let id = req.params.id
        Article.getArticleById(id).then(results =>{
            req.article = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getPrevArticle:(req,res,next) =>{
        let id = req.params.id
        Article.getPrevArticle(id).then(results =>{
            req.prevArticle = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getNextArticle:(req,res,next) =>{
        let id = req.params.id
        Article.getNextArticle(id).then(results =>{
            req.nextArticle = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getCount: (req,res,next) => {
        Article.getCount(req.query.keyword,req.query.category_id,req.query.hot).then(results =>{
            req.articleCount = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    getPage: (req,res,next) => {
        Article.getPage(res.start,res.size,req.query.keyword,req.query.category_id,req.query.hot).then(results =>{
            req.pageList = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    setHot:(req,res,next) =>{
        let {id,hot} = req.query
        Article.setHot(id,hot).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    add:(req,res,next) =>{
        let {title,about,content,hot,category_id} = req.body
        let article = {
            title:title,
            about:about,
            content:content,
            hot:hot? 1:0,
            category_id:category_id,
            thumbnail: req.uploadUrls ? req.uploadUrls[0]:null,
            time:new Date()
        }

        Article.add(article).then(results =>{
            req.insertId = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    del:(req,res,next) =>{
        let {id} = req.query
        Article.del(id).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    edit:(req,res,next) =>{
        let {title,about,content,hot,category_id,thumbnail,id} = req.body
        let article = {
            title:title,
            about:about,
            content:content,
            hot:hot? 1:0,
            category_id:category_id,
            //thumbnail: req.uploadUrl ? req.uploadUrl:thumbnail,
            thumbnail: req.uploadUrls ? req.uploadUrls[0]:thumbnail,
            id:id
        }
        Article.edit(article).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    like:(req,res,next)=>{
        let {id} = req.query
        Article.like(id).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    hit:(req,res,next)=>{
        let {id} = req.query
        Article.hit(id).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
}