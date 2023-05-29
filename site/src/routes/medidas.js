var express = require("express");
var router = express.Router();

var medida = require("../controllers/medidaController");

router.get("/medidaMicro/:fkTotem/:fkComponente", function (req, res) {
    medida.capturaMedidaMicro(req, res)
})

module.exports = router;