module.exports = class Pv extends require('./model'){
    static getTotal(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT SUM(hits) AS total FROM pv'
            this.query(sql).then(results=>{
                resolve(results[0].total)
            }).catch(err =>{
                console.log(`获取总访问量失败：${err.message}`)
                reject(err)
            })
        })
    }
    static getAll(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT `time`,hits FROM pv ORDER BY `time` ASC'
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取访问量失败：${err.message}`)
                reject(err)
            })
        })
    }
}