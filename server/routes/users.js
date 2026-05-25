var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const data = new Date();
  console.log('Acessou a rota /users em ' + data.toLocaleString());
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080'); //
  res.json({
    "Usuario": "Everton",
    "data": data.toLocaleString()
  });
});

module.exports = router;
