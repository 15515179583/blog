module.exports = class Tabs extends require('./model'){
    static getList(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT DISTINCT `name` FROM tabs'
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取标签云失败：${err.message}`)
                reject(err)
            })
        })
    }
    static getTabs(id){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id,`name` FROM tabs WHERE article_id = ? ORDER BY `index` DESC'
            this.query(sql,id).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取文章标签失败：${err.message}`)
                reject(err)
            })
        })
    }
}