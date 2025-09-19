var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    console.log("Route /contacts");
    res.render('pages/contact', { title: 'Contact' });
});


module.exports = router;