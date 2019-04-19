var express = require('express');
var router = express.Router();
var mongo=require('mongodb-curd');
var db='mzh';
var col='ku';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//查询所有
router.get('/api/find', function (req, res, next) {
  mongo.find(db, col, function (result) {
    if (!result) {
      res.json({
        code: 0,
        msg: "查询失败！"
      })
    } else {
      res.json({
        code: 1,
        data: result
      })
    }
  })
});
module.exports = router;
