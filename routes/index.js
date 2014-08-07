var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Hack Fortress',
    partials: {
      part: 'partials/home'
    }
  });
});

module.exports = router;
