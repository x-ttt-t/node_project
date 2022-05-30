var mongoose = require('mongoose');
module.exports= new mongoose.Schema ({
    //用户名
    username:String, 
    //密码
    password:String,
    //修改这张表  增加字段  
    //恋爱次数 int    是否正在恋爱 bool
    //恋爱日记内容 z
    account:String
})
