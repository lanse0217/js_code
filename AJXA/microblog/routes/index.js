var express = require('express');
var router = express.Router();
/* 提供数据接口 */
router.get('/api/one',(req,res,next)=>{
  res.json(
      {
        code:1,
        data:{
          name:'lucy',
          intro:"12121212121212"
        }
      }
  )
})
router.get('/api/two',(req,res,next)=>{
    res.json(
        {
            code:1,
            data:req.query //传过来什么返回什么
        }
    )
})
//
router.post('/api/four',(req,res,next)=>{
    res.json(
        {
            code:2,
            data:req.body
        }
    )
})
/* 返回页面 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AJAX接口' });
});

router.get('/page1', function(req, res, next) {
  res.render('page1');
});
router.get('/page2', function(req, res, next) {
    res.render('page2');
});
router.get('/page4', function(req, res, next) {
    res.render('page4');
});
router.get('/page6', function(req, res, next) {
    res.render('page6');
});
module.exports = router;
