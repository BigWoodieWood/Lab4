/** 
  * @file       index.js 
  * @author     Elliot Wood
  * @version    1 
  * @date       22/09/2025 
  * @brief      Routeur principal pour la page d'accueil
  */ 
var express = require('express'); 
var router = express.Router(); 

router.get('/', function(req, res, next) { 
    res.render('pages/accueil', { title: 'Accueil' }); 
}); 

 

module.exports = router;