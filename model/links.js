module.exports = class Links extends require('./model'){
    static getList(all){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM links WHERE 1 = 1'
            if(!all) {
                sql += ' AND display = 1'
            }
            sql += ' ORDER BY id'
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取友情链接失败：${err.message}`)
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
    static setDisplay(id,display){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE links SET display = ? WHERE id = ?'
            this.query(sql,[display,id]).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`友链状态修改失败：${err.message}`)
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