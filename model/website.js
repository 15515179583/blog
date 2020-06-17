module.exports = class Website extends require('./model'){
    static getInfo(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM website LIMIT 1'
            this.query(sql).then(results=>{
                resolve(results[0])
            }).catch(err =>{
                console.log(`获取朋友链接失败：${err.message}`)
                reject(err)
            })
        })
    }
    static edit(website){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE website SET name = ?, logo = ?, keywords = ?, beian = ?, message = ?, user = ?, wx = ?, about_content = ?, about_img = ?,github = ?, csdn = ?, qq = ?, vipTime = ?,porfile = ? WHERE id = 1'
            
            this.query(sql,[website.name,website.logo,website.keywords,website.beian,website.message,website.user,website.wx,website.about_content,website.about_img,website.github,website.csdn,website.qq,website.vipTime,website.porfile]).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`网站信息编辑失败：${err.message}`)
                reject(err)
            })
        })
    }
}