module.exports = class Category extends require('./model'){
    static getList(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id,`name`,`index` FROM category ORDER BY `index` DESC'
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取文章类目列表失败：${err.message}`)
                reject(err)
            })
        })
    }
    static getCount(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT COUNT(1) AS `count` FROM category'
            this.query(sql).then(results=>{
                resolve(results[0].count)
            }).catch(err =>{
                console.log(`获取总类目数失败：${err.message}`)
                reject(err)
            })
        })
    }
    static del(id){
        return new Promise((resolve,reject)=>{
            let sql = 'DELETE FROM category WHERE id = ?'
            
            this.query(sql,id).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`类目删除失败：${err.message}`)
                reject(err)
            })
        })
    }
    static setName(id,name){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE category SET name = ? WHERE id = ?'
            
            this.query(sql,[name,id]).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`类目名称修改成功：${err.message}`)
                reject(err)
            })
        })
    }
    static setIndex(id,index){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE category SET `index` = ? WHERE id = ?'
            
            this.query(sql,[index,id]).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`类目index修改失败：${err.message}`)
                reject(err)
            })
        })
    }
    static add(name,index){
        return new Promise((resolve,reject)=>{
            let sql = 'INSERT INTO category SET `name` = ?, `index` = ?'
            
            this.query(sql,[name,index]).then(results=>{
                resolve(results.insertId)
            }).catch(err =>{
                console.log(`添加类目失败：${err.message}`)
                reject(err)
            })
        })
    }
}