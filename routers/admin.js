
var express = require('express');
var router = express.Router();

router.get('/user',function(req, res, next){
     res.send('ADMIN - User');
});
router.get('/pick',function(req, res, next){
     res.render('pick-number');
})
router.get('/login',function(req, res, next){
     res.render('login');
})
router.get('/register',function(req, res, next){
     res.render('register');
})
router.get('/winner',function(req, res, next){
     res.render('winner');
})
router.get('/all',function(req, res, next){
     res.render('all-lotteries')
})
router.get('/contact',function(req, res, next){
     res.render('contact');
})
module.exports = router;