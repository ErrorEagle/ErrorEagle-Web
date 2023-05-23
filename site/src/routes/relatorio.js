var express = require("express");
var router = express.Router();
var relatorio = require("../controllers/relatorioController");


router.post("/gerarRelatorio", function (req, res) {
    relatorio.gerarRelatorio(req, res)
})

router.get("/listarRelatorio", function (req, res) {
    relatorio.gerarRelatorio(req, res)
})
router.get("/listarRelatorios", function (req, res) {
    relatorio.gerarRelatorio(req, res)
})

module.exports = router;