module.exports = class Links extends require('./model'){
    static getList(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id,`name`,linkUrl FROM links ORDER BY id'
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取朋友链接失败：${err.message}`)
                reject(err)
            })
        })
    }
    static del(id){
        return new Promise((resolve,reject)=>{
            let sql = 'DELETE FROM links WHERE id = ?'
            
            this.query(sql,id).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`友链删除失败：${err.message}`)
                reject(err)
            })
        })
    }
    static setName(id,name){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE links SET name = ? WHERE id = ?'
            
            this.query(sql,[name,id]).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`链接名称修改成功：${err.message}`)
                reject(err)
            })
        })
    }
    static setLinkUrl(id,linkUrl){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE links SET linkUrl = ? WHERE id = ?'
            
            this.query(sql,[linkUrl,id]).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`友链链接修改失败：${err.message}`)
                reject(err)
            })
        })
    }
    static add(name,linkUrl){
        return new Promise((resolve,reject)=>{
            let sql = 'INSERT INTO links SET `name` = ?, linkUrl = ?'
            
            this.query(sql,[name,linkUrl]).then(results=>{
                resolve(results.insertId)
            }).catch(err =>{
                console.log(`添加友链失败：${err.message}`)
                reject(err)
            })
        })
    }
}