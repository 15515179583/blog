module.exports = class User extends require('./model'){
    static login(username,password){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id, username, admin, user_img, link, vipTimes FROM `user` WHERE username = ? AND `password` = ?'
            this.query(sql,[username,password]).then(results=>{
                resolve(results[0])
            }).catch(err =>{
                console.log(`用户登录失败：${err.message}`)
                reject(err)
            })
        })
    }
    static regist(username,password,email){
        let user = {
            username:username,
            password:password,
            email:email,
            admin:username=='smile'||username=='admin'?1:0
        }
        return new Promise((resolve,reject)=>{
            let sql = 'INSERT INTO `user` SET ?'
            this.query(sql,user).then(results=>{
                resolve(results.insertId)
            }).catch(err =>{
                console.log(`用户注册失败：${err.message}`)
                reject(err)
            })
        })
    }
    static lastLoginTime(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT `time` FROM `log` WHERE handle = "登录" ORDER BY `time` DESC LIMIT 1'
            this.query(sql).then(results=>{
                resolve(results[0].time)
            }).catch(err =>{
                console.log(`获取用户登录时间失败：${err.message}`)
                reject(err)
            })
        })
    }
    static edit(user){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE user SET password = ?, user_img = ? WHERE username = ?'
            this.query(sql,[user.password,user.user_img,user.username]).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`用户信息修改失败：${err.message}`)
                reject(err)
            })
        })
    }
    static getList(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id,username,admin,vipTimes FROM user ORDER BY id'
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取用户列表失败：${err.message}`)
                reject(err)
            })
        })
    }
    static del(id){
        return new Promise((resolve,reject)=>{
            let sql = 'DELETE FROM user WHERE id = ?'
            
            this.query(sql,id).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`用户删除失败：${err.message}`)
                reject(err)
            })
        })
    }
    static setAdmin(id,admin){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE user SET admin = ? WHERE id = ?'
            
            this.query(sql,[admin,id]).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`权限设置失败：${err.message}`)
                reject(err)
            })
        })
    }
    static setLink(username){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE user SET link = 1 WHERE username = ?'
            this.query(sql,username).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`链接申请失败：${err.message}`)
                reject(err)
            })
        })
    }
    static useVip(id){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE user SET vipTimes = vipTimes-1 WHERE id = ?'
            
            this.query(sql,id).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`vip文章浏览失败：${err.message}`)
                reject(err)
            })
        })
    }
    static setTimes(id,times){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE user SET vipTimes = ? WHERE id = ?'
            
            this.query(sql,[times,id]).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`vip次数设置失败：${err.message}`)
                reject(err)
            })
        })
    }
}