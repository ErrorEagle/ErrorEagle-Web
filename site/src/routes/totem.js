var express = require("express");
var router = express.Router();
var totem = require("../controllers/totemController");


router.get("/listarTotens/:empresa", function (req, res) {
    totem.listarTotens(req, res)
})

router.get("/listarAlertasTotem/:idTotem", function (req, res) {
    totem.listarAlertasTotem(req, res)
})
router.get("/listarRelatorios/:empresa", function (req, res) {
    totem.listarRelatorios(req, res)
})

module.exports = router;