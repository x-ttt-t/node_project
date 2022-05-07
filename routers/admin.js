
var express = require('express');
var router = express.Router();

router.get('/user',function(req, res, next){
     res.send('ADMIN - User');
});
router.get('/',function(req, res, next){
     res.render('index1')
});
router.get('/about',function(req, res, next){
     res.render('about')
});

router.get('/products',function(req, res, next){
     res.render('products')
});
router.get('/select',function(req, res, next){
     res.render('select')
});
router.get('/shez',function(req, res, next){
     res.render('shez')
});
router.get('/record',function(req, res, next){
     res.render('record')
});
router.get('/put',function(req, res, next){
     res.render('put')
});
module.exports = router;