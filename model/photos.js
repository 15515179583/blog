module.exports = class Photos extends require('./model'){
    static getList(num){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM photos ORDER BY id DESC'
            if(num) {
                sql += ' LIMIT 9'
            }
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取照片列表失败：${err.message}`)
                reject(err)
            })
        })
    }
    static getPhotoById(id){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM photos WHERE id = ?'
            this.query(sql,id).then(results=>{
                resolve(results[0])
            }).catch(err =>{
                console.log(`无此照片：${err.message}`)
                reject(err)
            })
        })
    }
    static getCount(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT COUNT(1) AS `count` FROM photos'
            
            this.query(sql).then(results=>{
                resolve(results[0].count)
            }).catch(err =>{
                console.log(`获取总照片数量失败：${err.message}`)
                reject(err)
            })
        })
    }
    static getPage(start,size){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM photos ORDER BY id DESC LIMIT ?,?'
            this.query(sql,[start,size]).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取指定页照片列表失败：${err.message}`)
                reject(err)
            })
        })
    }
    static add(photo){
        return new Promise((resolve,reject)=>{
            let sql = 'INSERT INTO photos SET ?'
            
            this.query(sql,photo).then(results=>{
                resolve(results.insertId)
            }).catch(err =>{
                console.log(`添加照片失败：${err.message}`)
                reject(err)
            })
        })
    }
    static del(id){
        return new Promise((resolve,reject)=>{
            let sql = 'DELETE FROM photos WHERE id = ?'
            
            this.query(sql,id).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`照片删除失败：${err.message}`)
                reject(err)
            })
        })
    }
    static edit(photo){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE photos SET title = ?, content = ?, photoUrl = ? WHERE id = ?'
            
            this.query(sql,[photo.title,photo.content,photo.photoUrl,photo.id]).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`照片编辑失败：${err.message}`)
                reject(err)
            })
        })
    }
}