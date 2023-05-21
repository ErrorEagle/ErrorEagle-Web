var empresaModel = require("../models/empresaModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listarFuncionario(req, res) {
    var nome = req.body.nomeFuncionarioServer;
    var email = req.body.emailFuncionarioServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        empresaModel.listarFuncionario(nome, email).then(
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
        );
    }


}

function autenticarEmpresa(req, res) {
    var email = req.body.emailFuncionarioServer;
    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {
        empresaModel.autenticarEmpresa(email)
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

function cadastrarFuncionarioSistema(req, res) {

    var nomeFuncionario = req.body.nomeFuncionarioServer;
    var emailFuncionario = req.body.emailFuncionarioServer;
    var senhaFuncionario = req.body.senhaFuncionarioServer;
    var telefoneFuncionario = req.body.telefoneFuncionarioServer;
    var empresaFuncionario = req.body.empresaFuncionarioServer;
    var surpervisor = req.body.supervisorFuncionarioServer;


    if (nomeFuncionario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailFuncionario == null) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaFuncionario == null) {
        res.status(400).send("Sua senha está undefined!");
    } else if (telefoneFuncionario == null) {
        res.status(400).send("Seu telefoneFuncionario está undefined!");
    } else if (empresaFuncionario == null) {
        res.status(400).send("Sua empresa está undefined!");
    } else if (surpervisor == null) {
        res.status(400).send("Seu supervisor está undefined!");
    }
    else {
        empresaModel.cadastrarFuncionarioSistema(nomeFuncionario, emailFuncionario, senhaFuncionario, telefoneFuncionario, empresaFuncionario, surpervisor).then(
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

function cadastrarFuncionarioPlataforma(req, res) {
    var nomeFuncionario = req.body.nomeFuncionarioServer;
    var emailFuncionario = req.body.emailFuncionarioServer;
    var senhaFuncionario = req.body.senhaFuncionarioServer;
    var telefoneFuncionario = req.body.telefoneFuncionarioServer;
    var empresaFuncionario = req.body.empresaFuncionarioServer;

    if (nomeFuncionario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailFuncionario == null) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaFuncionario == null) {
        res.status(400).send("Sua senha está undefined!");
    } else if (telefoneFuncionario == null) {
        res.status(400).send("Seu telefoneFuncionario está undefined!");
    } else if (empresaFuncionario == null) {
        res.status(400).send("Sua empresa está undefined!");
    }
    else {
        empresaModel.cadastrarFuncionarioPlataforma(nomeFuncionario, emailFuncionario, senhaFuncionario, telefoneFuncionario, empresaFuncionario).then(
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

function cadastrarEmpresa(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var responsavel = req.body.nomeResponsavelServer;
    var razaoSocial = req.body.razaoSocialServer;
    var CNPJ = req.body.cnpjServer;
    var telefone = req.body.telefoneServer;
    var bandaLarga = req.body.bandaLargaServer;
    var email = req.body.dominioServer;
    var fkEndereco = req.body.fkEnderecoServer;

    // Faça as validações dos valores
    if (responsavel == undefined) {
        res.status(400).send("O nome do responsável está undefined!");
    } else if (razaoSocial == undefined) {
        res.status(400).send("A razão social está undefined!");
    } else if (CNPJ == undefined) {
        res.status(400).send("O CNPJ está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("O telefone está undefined!");
    } else if (bandaLarga == undefined) {
        res.status(400).send("A bandaLarga está undefined!");
    } else if (email == undefined) {
        res.status(400).send("O email está undefined!");
    } else if (fkEndereco == undefined) {
        res.status(400).send("O endereco está undefined!");
    } else {
        console.log(" Requisicao do corpo da empresa:" + req.body)
        // Passe os valores como parâmetro e vá para o arquivoempresaModel.js
        empresaModel.cadastrarEmpresa(responsavel, razaoSocial, CNPJ, telefone, bandaLarga, email, fkEndereco)
            .then(
                function (resultado) {

                    res.json(resultado);
                    console.log(res.json(resultado))
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da empresa! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarEndereco(req, res) {

    var cep = req.body.cepServer;
    var bairro = req.body.bairroServer;
    var rua = req.body.ruaServer;
    var numero = req.body.numeroServer;
    var estado = req.body.estadoServer;
    var cidade = req.body.cidadeServer;
    // console.log(req.body);

    if (cep == undefined) {
        res.status(400).send("O cep está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("o bairro está undefined!");
    } else if (rua == undefined) {
        res.status(400).send("a rua está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("O numero está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("O estado está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("A cidade está undefined!");
    } else {
        empresaModel.cadastrarEndereco(cep, bairro, rua, numero, estado, cidade)
            .then(
                function (resultado) {
                    console.log(resultado)
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro do endereço! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }



}

function entrarFuncionario(req, res) {

    var email = req.params.email;


    console.log(email);


    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {

        empresaModel.entrarFuncionario(email)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length != 0) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else {
                        res.status(403).send("Usuário não encontrado!");
                    }
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

function verificarEndereco(req, res) {

    var cep = req.params.cep;
    var numero = req.params.numero;

    if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Sua numero está indefinida!");
    } else {

        empresaModel.verificarEndereco(cep, numero)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length != 0) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else {
                        res.status(204).send("CEP ou Numero não encontrados!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\Houve um erro ao buscar o endereco! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function verificarEmpresa(req, res) {

    var cnpj = req.params.cnpj;


    if (cnpj == undefined) {
        res.status(400).send("Seu CNPJ está undefined!");
    } else {

        empresaModel.verificarEmpresa(cnpj)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length != 0) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else {
                        res.status(204).send("CNPJ não encontrado!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\Houve um erro ao buscar o CNPJ da Empresa! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}



module.exports = {
    cadastrarEndereco,
    cadastrarEmpresa,
    cadastrarFuncionarioPlataforma,
    cadastrarFuncionarioSistema,
    entrarFuncionario,
    listarFuncionario,
    autenticarEmpresa,
    verificarEndereco,
    verificarEmpresa,
}