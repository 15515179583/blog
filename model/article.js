module.exports = class Article extends require('./model'){
    static getHot(num){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id,title FROM artcle WHERE hot =1 ORDER BY TIME DESC LIMIT ?'
            this.query(sql,num).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取热门文章失败：${err.message}`)
                reject(err)
            })
        })
    }
    static getList(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM artcle ORDER BY TIME DESC'
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取文章列表失败：${err.message}`)
                reject(err)
            })
        })
    }

    static getListByCategoryId(id){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM artcle WHERE category_id = ? ORDER BY TIME DESC'
            this.query(sql,id).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取指定文章列表失败：${err.message}`)
                reject(err)
            })
        })
    }
    /*
    static getListByTabsId(id){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id,title,content FROM artcle WHERE category_id = ? ORDER BY TIME DESC'
            this.query(sql,id).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取指定标签文章列表失败：${err.message}`)
                reject(err)
            })
        })
    }
    */
    static getRanking(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id,title,hits FROM artcle ORDER BY hits DESC LIMIT 10'
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取排名列表失败：${err.message}`)
                reject(err)
            })
        })
    }
    static getListByKeyword(keyword){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM artcle WHERE title like ? ORDER BY TIME DESC'
            this.query(sql,`%${keyword}%`).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取特定词文章失败：${err.message}`)
                reject(err)
            })
        })
    }
    static getArticleById(id){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM artcle WHERE id = ?'
            this.query(sql,id).then(results=>{
                resolve(results[0])
            }).catch(err =>{
                console.log(`无此文章：${err.message}`)
                reject(err)
            })
        })
    }
    static getPrevArticle(id){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id,title FROM artcle WHERE id < ? ORDER BY id DESC LIMIT 1'
            this.query(sql,id).then(results=>{
                resolve(results[0])
            }).catch(err =>{
                console.log(`获取文章上一篇：${err.message}`)
                reject(err)
            })
        })
    }
    static getNextArticle(id){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id,title FROM artcle WHERE id > ? ORDER BY id LIMIT 1'
            this.query(sql,id).then(results=>{
                resolve(results[0])
            }).catch(err =>{
                console.log(`获取文章下一篇：${err.message}`)
                reject(err)
            })
        })
    }
    static getCount(keyword = '',category_id=-1,hot=-1){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT COUNT(1) AS `count` FROM artcle WHERE 1=1'
            sql += keyword != '' && keyword? ` AND title like '%${keyword}%'`:''
            sql += category_id !=-1 && category_id? ` AND category_id = ${category_id} `:''
            sql += hot !=-1 && hot? ` AND hot = ${hot}`:''
            this.query(sql).then(results=>{
                resolve(results[0].count)
            }).catch(err =>{
                console.log(`获取总文章数量失败：${err.message}`)
                reject(err)
            })
        })
    }
    static getPage(start,size,keyword='',category_id=-1,hot=-1){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM artcle WHERE 1=1'
            sql += keyword != '' && keyword? ` AND title like '%${keyword}%'`:''
            sql += category_id !=-1 && category_id? ` AND category_id = ${category_id} `:''
            sql += hot !=-1 && hot? ` AND hot = ${hot}`:''

            sql += ' ORDER BY `time` DESC LIMIT ?,?'
            this.query(sql,[start,size]).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取指定页文章列表失败：${err.message}`)
                reject(err)
            })
        })
    }
    static setHot(id,hot){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE artcle SET hot = ? WHERE id = ?'
            
            this.query(sql,[hot,id]).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`热门设置成功：${err.message}`)
                reject(err)
            })
        })
    }
    static add(article){
        return new Promise((resolve,reject)=>{
            let sql = 'INSERT INTO artcle SET ?'
            
            this.query(sql,article).then(results=>{
                resolve(results.insertId)
            }).catch(err =>{
                console.log(`添加文章失败：${err.message}`)
                reject(err)
            })
        })
    }
    static del(id){
        return new Promise((resolve,reject)=>{
            let sql = 'DELETE FROM artcle WHERE id = ?'
            
            this.query(sql,id).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`文章删除失败：${err.message}`)
                reject(err)
            })
        })
    }
    static edit(article){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE artcle SET title = ?, category_id = ?, about = ?, content = ?, hot = ?, thumbnail = ? WHERE id = ?'
            
            this.query(sql,[article.title,article.category_id,article.about,article.content,article.hot,article.thumbnail,article.id]).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`文章编辑失败：${err.message}`)
                reject(err)
            })
        })
    }
    static like(id){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE artcle SET `like` = `like` + 1 WHERE id = ?'
            this.query(sql,id).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`文章点赞失败：${err.message}`)
                reject(err)
            })
        })
    }
    static hit(id){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE artcle SET `hits` = `hits` + 1 WHERE id = ?'
            this.query(sql,id).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`文章浏览失败：${err.message}`)
                reject(err)
            })
        })
    }
}