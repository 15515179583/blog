module.exports = class About extends require('./model'){
    static getAbout(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM about WHERE id = 1'
            this.query(sql).then(results=>{
                resolve(results[0])
            }).catch(err =>{
                console.log(`获取关于我失败：${err.message}`)
                reject(err)
            })
        })
    }
    static edit(content){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE about SET content = ? WHERE id = 1'
            
            this.query(sql,content).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`编辑失败：${err.message}`)
                reject(err)
            })
        })
    }
}