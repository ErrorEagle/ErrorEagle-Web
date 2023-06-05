var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.get("/", function (req, res) {
    empresaController.testar(req, res);
});

router.get("/listar/empresa", function (req, res) {
    empresaController.listarEmpresa(req, res);
});

router.get("/listar/Funcionario", function (req, res) {
    empresaController.listarFuncionario(req, res);
});

router.post("/cadastrar/empresa", function (req, res) {
    empresaController.cadastrarEmpresa(req, res);
});

router.post("/cadastrar/endereco", function (req, res) {
    empresaController.cadastrarEndereco(req, res);
})

router.get("/autenticar/funcionario/:email", function (req, res) {
    empresaController.entrarFuncionario(req, res);
});

router.get("/verificar/endereco/:cep/:numero", function (req, res) {
    empresaController.verificarEndereco(req, res);
});

router.get("/verificar/empresa/:cnpj", function (req, res) {
    empresaController.verificarEmpresa(req, res);
});


router.post("/cadastrar/funcionario/plataforma", function (req, res) {
    empresaController.cadastrarFuncionarioPlataforma(req, res);
});


router.post("/cadastrar/funcionario/sistema", function (req, res) {
    empresaController.cadastrarFuncionarioSistema(req, res);
});

router.put("/autenticar/empresa", function (req, res) {
    empresaController.autenticarEmpresa(req, res);
})

module.exports = router;