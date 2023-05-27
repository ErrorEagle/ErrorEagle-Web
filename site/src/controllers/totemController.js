

var totemModel = require("../models/totemModel");

function listarTotens(req, res) {

    var empresa = req.params.empresa;

    console.log(empresa);

    if (empresa == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else {

        totemModel.listarTotem(empresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\Houve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function listarAlertasTotem(req, res) {

    var idMaquina = req.params.idTotem;
    console.log(idMaquina)
    if (idMaquina == undefined) {
        res.status(400).send("Sua maquina está undefined!!");
    } else {
        totemModel.listarAlertasTotem(idMaquina)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\Houve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    listarTotens,
    listarAlertasTotem

}