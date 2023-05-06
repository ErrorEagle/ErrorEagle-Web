var express = require("express");
var router = express.Router();

var gerenciadorUsuario = require("../controllers/gerenciadorUsuarioController");

// router.post("/cadastrar/funcionario", function (req, res) {
//     gerenciadorUsuario.cadastrarFuncionario(req, res);
// })

router.put("/deletar/funcionario/:funcionario", function (req, res) {
    gerenciadorUsuario.deletarUsuario(req, res);
})

router.get("/listarFuncionarios/:empresa", function (req, res) {
    gerenciadorUsuario.listarFuncionarios(req, res);
})

router.get("/listarFuncionariosInativos/:empresa", function (req, res) {
    gerenciadorUsuario.listarFuncionariosInativos(req, res);
})

router.put("/atualizarPassword", function (req, res) {
    gerenciadorUsuario.atualizarPassword(req, res)
})

module.exports = router;