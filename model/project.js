module.exports = class projects extends require('./model'){
    static getList(num){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM projects ORDER BY id DESC'
            if(num) {
                sql += ' LIMIT 9'
            }
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取作品列表失败：${err.message}`)
                reject(err)
            })
        })
    }
    static getprojectById(id){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM projects WHERE id = ?'
            this.query(sql,id).then(results=>{
                resolve(results[0])
            }).catch(err =>{
                console.log(`无此作品：${err.message}`)
                reject(err)
            })
        })
    }
    static getCount(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT COUNT(1) AS `count` FROM projects'
            
            this.query(sql).then(results=>{
                resolve(results[0].count)
            }).catch(err =>{
                console.log(`获取总作品数量失败：${err.message}`)
                reject(err)
            })
        })
    }
    static getPage(start,size){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM projects ORDER BY id DESC LIMIT ?,?'
            this.query(sql,[start,size]).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取指定页作品列表失败：${err.message}`)
                reject(err)
            })
        })
    }
    static add(project){
        return new Promise((resolve,reject)=>{
            let sql = 'INSERT INTO projects SET ?'
            
            this.query(sql,project).then(results=>{
                resolve(results.insertId)
            }).catch(err =>{
                console.log(`添加作品失败：${err.message}`)
                reject(err)
            })
        })
    }
    static edit(project){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE projects SET title = ?, content = ?, photoUrl = ?, linkUrl = ? WHERE id = ?'
            
            this.query(sql,[project.title,project.content,project.photoUrl,project.linkUrl,project.id]).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`作品编辑失败：${err.message}`)
                reject(err)
            })
        })
    }
    static del(id){
        return new Promise((resolve,reject)=>{
            let sql = 'DELETE FROM projects WHERE id = ?'
            
            this.query(sql,id).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`作品删除失败：${err.message}`)
                reject(err)
            })
        })
    }
    
}