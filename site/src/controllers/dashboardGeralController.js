var dashboardGeralModel = require("../models/dashboardGeralModel");


function listarQntdAlertaDiario(req, res) {

    var empresa = req.params.empresa;
    var data = req.params.data;

    if (empresa == undefined) {
        res.status(400).send("Empresa está undefined!");
    } else if (data == undefined) {
        res.status(400).send("Data está undefined!");
    }
    else {
        dashboardGeralModel.listarQntdAlertaDiario(empresa, data)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length != 0) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else {
                        res.status(204).send("Alerta não encontrado!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\Houve um erro ao buscar a quantidade de erros! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function porcentagemAlertas(req, res) {
    var componente = req.params.componente;
    var empresa = req.params.empresa;
    var data = req.params.data;

    if (empresa == undefined) {
        res.status(400).send("Empresa está undefined!");
    } else if (data == undefined) {
        res.status(400).send("Data está undefined!");
    }
    else if (componente == undefined) {
        res.status(400).send("Componente está undefined!");
    }
    else {
        dashboardGeralModel.porcentagemAlertas(componente, empresa, data)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length != 0) {
                        console.log(resultado);
                        res.json(resultado);
                    } else {
                        res.status(204).send("Alerta não encontrado!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\Houve um erro ao buscar a quantidade de erros! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function listarQntdTotalAlertas(req, res) {

    var empresa = req.params.empresa;
    var data = req.params.data;

    if (empresa == undefined) {
        res.status(400).send("Empresa está undefined!");
    } else if (data == undefined) {
        res.status(400).send("Data está undefined!");
    }
    else {
        dashboardGeralModel.listarQntdTotalAlertas(empresa, data)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length != 0) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else {
                        res.status(204).send("Alerta não encontrado!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\Houve um erro ao buscar a quantidade de erros! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function listarAlertasFiltro(req, res) {

    var tipoComponente = req.params.tipoComponente;
    var tipoMensagem = req.params.tipoMensagem;
    var empresa = req.params.empresa;
    var data = req.params.data;

    if (empresa == undefined) {
        res.status(400).send("Empresa está undefined!");
    } else if (data == undefined) {
        res.status(400).send("Data está undefined!");
    }
    else if (tipoComponente == undefined) {
        res.status(400).send("Empresa está undefined!");
    } else if (tipoMensagem == undefined) {
        res.status(400).send("Mensagem está undefined!");
    }
    else {
        console.log("Estou no listarAlertasFiltro")
        dashboardGeralModel.listarAlertasFiltro(tipoMensagem, tipoComponente, empresa, data)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length != 0) {
                        console.log(resultado);
                        res.json(resultado);
                    } else {
                        res.status(204).send("Alertas não encontrados!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\Houve um erro ao buscar a quantidade de erros! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function listarAlertasDia(req, res) {

    var tipoMensagem = req.params.tipoMensagem;
    var empresa = req.params.empresa;
    var data = req.params.data;

    if (empresa == undefined) {
        res.status(400).send("Empresa está undefined!");
    } else if (data == undefined) {
        res.status(400).send("Data está undefined!");
    }
    else if (data == undefined) {
        res.status(400).send("data está undefined!");
    } else if (tipoMensagem == undefined) {
        res.status(400).send("Mensagem está undefined!");
    }
    else {
        console.log("Estou no listarAlertasFiltro")
        dashboardGeralModel.listarAlertasDia(tipoMensagem, empresa, data)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length != 0) {
                        console.log(resultado + "resultado alerta diario");
                        res.json(resultado);
                    } else {
                        res.status(204).send("Alertas não encontrados!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\Houve um erro ao buscar a quantidade de erros! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


}

module.exports = {
    listarQntdAlertaDiario, listarQntdTotalAlertas, listarAlertasFiltro, listarAlertasDia, porcentagemAlertas
}