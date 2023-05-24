var express = require("express");
var router = express.Router();
var relatorio = require("../controllers/relatorioController");


router.post("/gerarRelatorio", function (req, res) {
    relatorio.gerarRelatorio(req, res)
})

router.get("/listarRelatorio/:idRelatorio", function (req, res) {
    relatorio.listarRelatorio(req, res)
})
router.get("/listarRelatorios/:empresa", function (req, res) {
    relatorio.listarRelatorios(req, res)
})

module.exports = router;