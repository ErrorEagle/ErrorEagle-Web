var relatorioModel = require("../models/relatorioModels");

function gerarRelatorio(req, res) {

    console.log("Cheguei no Controller")
    var titulo = req.body.tituloServer;
    var descricaoIncidente = req.body.descricaoIncidenteServer;
    var descricaoManutencao = req.body.descricaoManutencaoServer;
    var dataManutencao = req.body.dataManutencaoServer;
    var dataRelatorio = req.body.dataRelatorioServer;
    var fkTotem = req.body.fkTotemServer;
    var fkFuncionario = req.body.fkFuncionarioServer;


    if (titulo == null) {
        res.resultado(400).send("Titulo esta undefined")
    } else if (descricaoIncidente == null) {
        res.status(400).send("Descrição incidente esta undefined!");
    } else if (descricaoManutencao == null) {
        res.status(400).send("Descriçáo manutenção está undefined!");
    } else if (dataManutencao == null) {
        res.status(400).send("Data manutenção está undefined!");
    } else if (dataRelatorio == null) {
        res.status(400).send("Data relatório está undefined!");
    } else if (fkTotem == null) {
        res.status(400).send("fkMáquina está undefined!");
    } else if (fkFuncionario == null) {
        res.status(400).send("fkFuncionario está undefined!");
    }
    else {
        console.log("Cheguei no Controller")
        relatorioModel.gerarRelatorio(fkFuncionario, fkTotem, titulo, descricaoIncidente, descricaoManutencao, dataManutencao, dataRelatorio).then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
    }

}

function listarRelatorios(req, res) {
    var fkEmpresa = req.params.empresa;
    console.log(req.params.empresa)

    console.log("Teste " + fkEmpresa)
    if (fkEmpresa == undefined) {

        res.status(400).send("fkEmpresa esta undefined!");
    } else {
        relatorioModel.listarRelatorios(fkEmpresa).then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
    }

}

function listarRelatorio(req, res) {

    var idRelatorio = req.params.idRelatorio;

    if (idRelatorio == undefined) {
        res.status(400).send("idRelatorio esta undefined!");
    } else {
        relatorioModel.listarRelatorio(idRelatorio).then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
    }

}

module.exports = {
    gerarRelatorio,
    listarRelatorios,
    listarRelatorio

};

