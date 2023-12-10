var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ass', { title: 'hot ass' });
});

module.exports = router;
