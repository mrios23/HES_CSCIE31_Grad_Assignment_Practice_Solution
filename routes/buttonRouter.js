// ***** SOLUTION: Creating buttonRouter.js to render page when button is clicked

var express = require('express');
var router = express.Router();

/* GET clickedButton page. */
router.get('/', function(req, res, next) {
    res.render('clickedButton');
  });

module.exports = router;