module.exports = class gbooks extends require('./model'){
    static getList(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM gbooks ORDER BY id'
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取留言列表失败：${err.message}`)
                reject(err)
            })
        })
    }
    static add(content,user){
        return new Promise((resolve,reject)=>{
            let sql = 'INSERT INTO gbooks SET content = ?, `user` = ?'
            this.query(sql,[content,user]).then(results=>{
                resolve(results.insertId)
            }).catch(err =>{
                console.log(`添加评论失败：${err.message}`)
                reject(err)
            })
        })
    }
    static getCount(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT COUNT(1) AS `count` FROM gbooks'
            
            this.query(sql).then(results=>{
                resolve(results[0].count)
            }).catch(err =>{
                console.log(`获取总留言数量失败：${err.message}`)
                reject(err)
            })
        })
    }
    static getPage(start,size){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM gbooks ORDER BY id DESC LIMIT ?,?'
            this.query(sql,[start,size]).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取指定页留言列表失败：${err.message}`)
                reject(err)
            })
        })
    }
}