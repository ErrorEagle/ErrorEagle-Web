var gerenciadorUsuarioModel = require("../models/gerenciadorUsuarioModel");

var sessoes = [];

// function cadastrarFuncionario(req, res) {
//     var nomeFuncionario = req.body.nomeFuncionarioServer;
//     var emailFuncionario = req.body.emailFuncionarioServer;
//     var senhaFuncionario = req.body.senhaFuncionarioServer;
//     var telefoneFuncionario = req.body.telefoneFuncionarioServer;
//     var empresaFuncionario = req.body.empresaFuncionarioServer;
//     var fkSupervisor = req.body.fkSupervisorServer;


//     if (nomeFuncionario == undefined) {
//         res.status(400).send("Seu nome está undefined!");
//     } else if (emailFuncionario == null) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (senhaFuncionario == null) {
//         res.status(400).send("Sua senha está undefined!");
//     } else if (telefoneFuncionario == null) {
//         res.status(400).send("Seu telefoneFuncionario está undefined!");
//     } else if (empresaFuncionario == null) {
//         res.status(400).send("Sua empresa está undefined!");
//     } else if (fkSupervisor == null) {
//         res.status(400).send("ID resposável está undefined!");
//     }
//     else {
//         gerenciadorUsuarioModel.cadastrarFuncionario(nomeFuncionario, emailFuncionario, senhaFuncionario, telefoneFuncionario, empresaFuncionario, fkSupervisor).then(
//             function (resultado) {
//                 res.json(resultado);
//             }
//         ).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log(
//                     "\nHouve um erro ao realizar o cadastro! Erro: ",
//                     erro.sqlMessage
//                 );
//                 res.status(500).json(erro.sqlMessage);
//             }
//         )
//     }


// }

function deletarUsuario(req, res) {
    var idFuncionario = req.params.funcionario;

    if (idFuncionario == undefined) {
        res.status(400).send("Seu idFuncionario está undefined!");

    } else {
        gerenciadorUsuarioModel.deletarUsuario(idFuncionario).then(
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

function listarFuncionarios(req, res) {

    var empresa = req.params.empresa;

    console.log(empresa);

    if (empresa == undefined) {
        res.status(400).send("Seu empresa está undefined!");
    } else {

        gerenciadorUsuarioModel.listarFuncionarios(empresa)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    // if (resultado.length == 1) {
                    console.log(resultado);
                    res.json(resultado);
                    // } else if (resultado.length == 0) {
                    //     res.status(403).send("Email e/ou senha inválido(s)");
                    // } else {
                    //     res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    // }
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

function listarFuncionariosInativos(req, res) {

    var empresa = req.params.empresa;

    console.log(empresa);

    if (empresa == undefined) {
        res.status(400).send("Seu empresa está undefined!");
    } else {

        gerenciadorUsuarioModel.listarFuncionariosInativos(empresa)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    // if (resultado.length == 1) {
                    console.log(resultado);
                    res.json(resultado);
                    // } else if (resultado.length == 0) {
                    //     res.status(403).send("Email e/ou senha inválido(s)");
                    // } else {
                    //     res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    // }
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


// Acredito que precise validar o no content
function listarFuncionariosInativos(req, res) {

    var empresa = req.params.empresa;

    console.log(empresa);

    if (empresa == undefined) {
        res.status(400).send("Seu empresa está undefined!");
    } else {

        gerenciadorUsuarioModel.listarFuncionariosInativos(empresa)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    // if (resultado.length == 1) {
                    console.log(resultado);
                    res.json(resultado);
                    // } else if (resultado.length == 0) {
                    //     res.status(403).send("Email e/ou senha inválido(s)");
                    // } else {
                    //     res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    // }
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

function atualizarPassword(req, res) {

    var idFuncionario = req.body.idFuncionarioServer
    var novaPass = req.body.novaPassServer
    console.log(idFuncionario + " " + novaPass);


    if (idFuncionario == undefined) {
        res.status(400).send("Seu id esta undefined");

    } else if (novaPass == undefined) {
        res.status(400).send("Seu novaPass esta undefined")
    } else {
        gerenciadorUsuarioModel.atualizarPassword(idFuncionario, novaPass)
            .then(
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
    // cadastrarFuncionario,
    atualizarPassword,
    deletarUsuario,
    listarFuncionarios,
    listarFuncionariosInativos
}