/** 
  * @file       forms.js 
  * @author     Elliot Wood
  * @version    1 
  * @date       22/09/2025 
  * @brief      Routeur principal pour la page du formulaire de commande
  */
var express = require('express'); 
var fs = require('fs');
var router = express.Router(); 

const fileName = "transactions.txt";

// GET form
router.get('/', function(req, res, next) { 
    res.render('pages/form', { title: 'form' }); 
}); 

// POST form
router.post('/', (req, res) => {
    const data = req.body;

    // Save transaction to file
    const line = `${data.telephone}:${JSON.stringify(data)}\n`;
    fs.appendFileSync(fileName, line, "utf8");

    // Show result page
    res.render('pages/resultat', {
        data: data,
    });
});

module.exports = router;