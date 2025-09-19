var express = require('express'); 
var router = express.Router(); 
let History = [];
router.get('/', function(req, res, next) { 
        res.render('pages/form', { title: 'form' }); 
}); 
router.post('/', (req, res) => {
    const data = req.body;
    History.push(data);
    res.render('pages/resultat', {
        data: data,
    });
});
 

module.exports = router;