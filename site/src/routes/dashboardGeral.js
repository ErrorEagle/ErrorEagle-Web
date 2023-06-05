var express = require("express");
var router = express.Router();

var dashboardGeralController = require("../controllers/dashboardGeralController");

router.get("/listarQntdAlertaDiario/:empresa/:data", function (req, res) {
    dashboardGeralController.listarQntdAlertaDiario(req, res);
})

router.get("/listarQntdTotalAlertas/:empresa/:data", function (req, res) {
    dashboardGeralController.listarQntdTotalAlertas(req, res);
})

router.get("/listarAlertasFiltro/:tipoComponente/:tipoMensagem/:empresa/:data", function (req, res) {
    dashboardGeralController.listarAlertasFiltro(req, res);
});


module.exports = router;