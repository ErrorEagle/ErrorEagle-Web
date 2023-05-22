var express = require("express");
var router = express.Router();

router.put("/gerarRelatorio", function (req, res) {
    relatorio.gerarRelatorio(req, res)
})

module.exports = router;