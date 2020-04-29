const express = require('express')
const users = require('../../middleware/user')

const usersApp = express() 

usersApp.get('/',users.getList,(req,res)=>{
    let {users} = req
    res.render('admin/users/index',{user:req.user,users:users})
})
usersApp.get('/del',users.del,(req,res) =>{
    if(req.affectedRows > 0){
        res.json({
            code:1,
            msg:'删除成功'
        })
    } else {
        res.json({
            code:0,
            msg:'删除失败'
        })
    }
})
usersApp.get('/setadmin',users.setAdmin,(req,res) =>{
    if(req.affectedRows > 0){
        res.json({
            code:1,
            msg:'设置成功'
        })
    } else {
        res.json({
            code:0,
            msg:'设置失败'
        })
    }
})
module.exports = usersApp