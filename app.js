//app.js的文件入门启动

//加载web3模块
const Web3 = require('web3');
let web3 = new Web3('ws://localhost:8546');

web3.eth.getAccounts().then(console.log);
web3.eth.getBalance("0xC7bcCb58d8D0a64a364c7e3be3CaBDe5E29A5157")
.then(console.log);


//加载express 模块
var express = require('express');
//加载模块处理框架
var swig = require('swig');
const { connect } = require("cookies");
const { default: mongoose } = require('mongoose');

//加载body-parser,用来处理post提交过来的数据
var bodyParser = require('body-parser');

//加载cookies模块
var Cookies = require('cookies');

//创建app应用  =》NodeJs Http.createServer();
var app = express();

//设置静态文件托管
//当用户访问的url以/public开始，那么直接返回对应public下的文件
app.use('/public', express.static(__dirname + '/public'));


//配置应用模板
//定义当前应用所使用的模板引擎
//第一个参数，模板引擎的名称,同时也是模板文件的后缀
//第二个参数为解析处理模板内容的方法
app.engine('html',swig.renderFile);
//设置模板文件存放的目录,
//第一个参数为views,
//第二个参数是目录
app.set('views','./views')
//模板引擎名称，第一个参数是view engine 
//第二个参数和app.engine引擎的第一个参数是一致的     
app.set('view engine','html')
swig.setDefaults({cache:false});

//bodyparser设置 
app.use(bodyParser.urlencoded({ extended:true}));

//设置cookie
app.use(function(req, res, next){
    req.cookies = new Cookies(req,res);
    //解析登录用户的cookie信息
    req.userInfo={}
    if(req.cookies.get('userInfo')) {
        try{
            req.userInfo = JSON.parse(req.cookies.get('userInfo'));
        }catch(e){

        }
    }
    next();
})

//根据不同的功能划分模块
app.use('/admin',require('./routers/admin'));

app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));

mongoose.connect('mongodb://localhost:27018/blog',function(err){
    if(err){
        console.log('数据库链接失败')
    }
    else {
        console.log('数据库链接成功');
        app.listen(8888);
    }

})
// /*
//     首页
//     req requesst 对象
//     res response 对象
//     next 函数
// */

// app.get('/', function(req, res,next){
//     // res.send('<h1>欢迎光临博客</h1>');
//     //读取views目录下的文件，解析并返回给客户端
//     //第一个参数，表示模板的文件 
//     //传递给模板使用的数据
//     res.render('index');
// })




//用户发送http请求 ->url ->解析路由 ->找到匹配的规则 ->执行指定的绑定函数，返回对应内容至用户
//public -> 静态 ->直接读取指定目录下的文件，返回给用户
//->动态 ->处理业务逻辑 ，加载模板，解析模板 ->返回给用户