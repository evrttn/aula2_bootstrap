var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const data = new Date(2026, 4, 30, 0, 23, 0); // Data fixa para demonstração
  console.log('Acessou a rota /users em ' + data.toLocaleString());
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080'); //
  res.json({
    "data": data.getTime() // Envia a data como timestamp (milissegundos desde 1º de janeiro de 1970)
  });
});

module.exports = router;
