function abrirLogin() {
    var cadastroId = document.querySelector(".cadastro");
    var loginId = document.querySelector(".login");
    cadastroId.style = "display:none"
    console.log("Abrir login")
    loginId.style = "display:flex;"
}
function abrirCadastro() {
    var cadastroId = document.querySelector(".cadastro");
    var loginId = document.querySelector(".login");
    loginId.style = "display:none;"
    console.log("Abrir cadastro")
    cadastroId.style = "display:flex;"
}
function closeCadastro() {
    var cadastroId = document.querySelector(".cadastro");
    cadastroId.style = "display:none"
}
function closeLogin() {
    var loginId = document.querySelector(".login");
    loginId.style = "display:none;"

}

function checkSenha() {
    var str = inpSenhaCadastro.value;
    console.log(str);
    var states = 0;
    // Verifica se a string tem no máximo 8 caracteres
    if (str.length <= 7) {
    } else {
        states++;
    }
    // Verifica se a string tem caracteres maiúsculos
    if (/[A-Z]/.test(str)) {
        states++;
        console.log('A string contém caracteres maiúsculos');
    }
    // Verifica se a string tem caracteres minúsculos
    if (/[a-z]/.test(str)) {
        states++;
        console.log('A string contém caracteres minúsculos');
    }
    // Verifica se a string tem números
    if (/\d/.test(str)) {
        states++;
        console.log('A string contém números');
    }
    // Verifica se a string tem caracteres especiais
    if (/[^A-Za-z0-9]/.test(str)) {
        states++;
        console.log('A string contém caracteres especiais');
    }
    console.log(states);
    switch (states) {
        case 1:
            loadingSenha.style = "background:red;  transition: 2s;"
            break;
        case 2:
            loadingSenha.style = "background:orange;  transition: 2s;"
            break;
        case 3:
            loadingSenha.style = "background:yellow;  transition: 2s;"
            break;
        case 4:
            loadingSenha.style = "background:blue;  transition: 2s;"
            break;
        case 5:
            loadingSenha.style = "background:green;  transition: 2s;"
            return true
            break;
    }
}

function checkCamposCadastroEmpresa() {
    var razaoSocial = inpRazaoSocial.value
    var cnpj = inpCNPJ.value
    var telefone1 = inpTelefone1.value
    var telefone = inpTelefone.value
    var nomeFuncionario = nomeCadastro.value
    var emailFuncionario = inpEmailCadastro.value
    var telefoneFuncionario = inpTelefoneFuncionario.value
    var senhaVar = inpSenhaCadastro.value
    var senhaConfirmVar = inpSenhaConfirmacao.value

    let hasEmptyFields = false; // flag para verificar se há campos vazios

    if (razaoSocial === "") {
        inpRazaoSocial.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpRazaoSocial.style = "border: 1px solid #ccc; ";
    }

    if (cnpj === "") {
        inpCNPJ.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpCNPJ.style = "border: 1px solid #ccc; ";
    }

    if (telefone1 === "") {
        inpTelefone1.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpTelefone1.style = "border: 1px solid #ccc; ";
    }

    // if (telefone === "") {
    //     inpTelefone.style = "border: 3px solid #ff0000 ;";
    //     hasEmptyFields = true;
    // } else {
    //     inpTelefone.style = "border: 1px solid #ccc; ";
    // }

    if (nomeFuncionario === "") {
        nomeCadastro.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        nomeCadastro.style = "border: 1px solid #ccc; ";
    }

    if (emailFuncionario === "") {
        inpEmailCadastro.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpEmailCadastro.style = "border: 1px solid #ccc; ";
    }

    // Validando campo "inpCep"
    var cep = inpCep.value;
    if (cep === "") {
        inpCep.style = "border: 3px solid #ff0000;";
        hasEmptyFields = true;
    } else {
        inpCep.style = "border: 1px solid #ccc;";
    }

    // Validando campo "inpBairro"
    var bairro = inpBairro.value;
    if (bairro === "") {
        inpBairro.style = "border: 3px solid #ff0000;";
        hasEmptyFields = true;
    } else {
        inpBairro.style = "border: 1px solid #ccc;";
    }

    // Validando campo "inpRua"
    var rua = inpRua.value;
    if (rua === "") {
        inpRua.style = "border: 3px solid #ff0000;";
        hasEmptyFields = true;
    } else {
        inpRua.style = "border: 1px solid #ccc;";
    }

    // Validando campo "inpNumero"
    var numero = inpNumero.value;
    if (numero === "") {
        inpNumero.style = "border: 3px solid #ff0000;";
        hasEmptyFields = true;
    } else {
        inpNumero.style = "border: 1px solid #ccc;";
    }

    // Validando campo "inpEstado"
    var estado = inpEstado.value;
    if (estado === "") {
        inpEstado.style = "border: 3px solid #ff0000;";
        hasEmptyFields = true;
    } else {
        inpEstado.style = "border: 1px solid #ccc;";
    }

    // Validando campo "inpCidade"
    var cidade = inpCidade.value;
    if (cidade === "") {
        inpCidade.style = "border: 3px solid #ff0000;";
        hasEmptyFields = true;
    } else {
        inpCidade.style = "border: 1px solid #ccc;";
    }

    if (telefoneFuncionario === "") {
        inpTelefoneFuncionario.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpTelefoneFuncionario.style = "border: 1px solid #ccc; ";
    }

    if (senhaVar === "") {
        inpSenhaCadastro.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpSenhaCadastro.style = "border: 1px solid #ccc; ";
    }

    if (senhaConfirmVar === "") {
        inpSenhaConfirmacao.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpSenhaConfirmacao.style = "border: 1px solid #ccc; ";
    }


    if (hasEmptyFields) {
        Swal.fire({
            title: 'Preencha todos os campos',
            icon: 'error',
            confirmButtonText: 'Continuar'
        })
        return false;
    }

    if (inpSenhaCadastro.value != inpSenhaConfirmacao.value) {
        inpSenhaConfirmacao.style = "border: 3px solid #ff0000 ;";
        inpSenhaCadastro.style = "border: 3px solid #ff0000 ;";
        Swal.fire({
            title: 'Senhas não coincidem',
            icon: 'error',
            confirmButtonText: 'Continuar'
        })
        return false;
    }
    return true; // retorna verdadeiro se não há campos vazios
}

function limparErros() {

    const limpar = setTimeout(() => {
        nomeCadastro.style = " border: 1px solid #ccc; "
        inpRazaoSocial.style = " border: 1px solid #ccc; "
        inpCNPJ.style = " border: 1px solid #ccc; ;"
        inpTelefone.style = " border: 1px solid #ccc; "
        inpTelefone1.style = " border: 1px solid #ccc; "
        inpTelefoneFuncionario.style = " border: 1px solid #ccc; "
        inpEmailCadastro.style = " border: 1px solid #ccc; "
        inpSenhaCadastro.style = " border: 1px solid #ccc; "
        inpSenhaConfirmacao.style = " border: 1px solid #ccc; "
        inpCep.style = " border: 1px solid #ccc; "
        inpRua.style = " border: 1px solid #ccc; "
        inpBairro.style = " border: 1px solid #ccc; "
        inpNumero.style = " border: 1px solid #ccc; "
        inpEstado.style = " border: 1px solid #ccc; "
        inpCidade.style = " border: 1px solid #ccc; "
    }, 5000)

}

function validarLogin() {
    var emailVar = inpEmailLogin.value;
    var senhaVar = inpSenhaLogin.value;

    let hasEmptyFields = false; // flag para verificar se há campos vazios

    if (emailVar === "") {
        inpEmailLogin.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;
    } else {
        inpEmailLogin.style = "border: 1px solid #ccc; ";
    }

    if (senhaVar === "") {
        inpSenhaLogin.style = "border: 3px solid #ff0000 ;";
        hasEmptyFields = true;

    } else {
        inpSenhaLogin.style = "border: 1px solid #ccc;";
    }

    if (hasEmptyFields == true) {
        Swal.fire({
            title: 'Preencha todos os campos',
            icon: 'error',
            confirmButtonText: 'Continuar'
        })
        console.log("hasEmptyFields")
        return false;
    }

    // Aqui você pode adicionar a lógica para verificar se o email e senha são válidos.
    // Isso depende da forma como você está autenticando o usuário, seja por meio de um banco de dados ou outra fonte de dados.

    return true; // retorna verdadeiro se não há campos vazios
}

function entrar() {

    // aguardar();
    if (validarLogin() == true) {
        var emailVar = inpEmailLogin.value;
        var senhaVar = inpSenhaLogin.value;

        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);
        fetch(`empresa/autenticar/funcionario/${emailVar}/${senhaVar}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function (resposta) {
                console.log("ESTOU NO THEN DO entrar()!");

                if (resposta.ok) {
                    console.log(resposta);

                    resposta.json().then((json) => {
                        console.log(json);
                        console.log(JSON.stringify(json));
                        console.log(json);

                        sessionStorage.ID_FUNCIONARIO = json.idFuncionario;
                        sessionStorage.NOME_USUARIO = json.nome;
                        sessionStorage.EMAIL_USUARIO = json.email;
                        sessionStorage.TELEFONE_USUARIO = json.telefone;
                        sessionStorage.FK_EMPRESA = json.fkEmpresa;
                        sessionStorage.FK_SURPERVISOR = json.fkSurpervisor
                        sessionStorage.SENHA_USUARIO = json.senha;
                        sessionStorage.EMPRESA = json.razaoSocial;
                        fecharModal("#modalLoginForm");
                        setTimeout(function () {
                            window.location = "./dashboard/menu.html";
                        }, 1000); // apenas para exibir o loading
                    });
                } else {
                    console.log("Houve um erro ao tentar realizar o login!");

                    resposta.text().then((texto) => {
                        console.error(texto);
                        //finalizarAguardar(texto);
                    });
                }
            })
            .catch(function (erro) {
                console.log(erro);
            });
    } else {
        console.log("Erro na validação")
    }

    return false;
}

function cadastrarEmpresa() {
    //aguardar();
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var cep = inpCep.value;
    var bairro = inpBairro.value;
    var rua = inpRua.value;
    var numero = inpNumero.value;
    var estado = inpEstado.value;
    var cidade = inpCidade.value;

    var nomeResponsavel = nomeCadastro.value;
    var emailFuncionario = inpEmailCadastro.value;
    var telefoneFuncionario = inpTelefoneFuncionario.value;
    var senhaVar = inpSenhaCadastro.value;

    var razaoSocial = inpRazaoSocial.value;
    var cnpj = inpCNPJ.value;
    var telefone1 = inpTelefone1.value;
    var telefone = inpTelefone.value;
    var dominioVar = emailFuncionario;

    // .split('@')[1];;

    var idEmpresaAtual;
    var idEnderecoAtual;

    var enderecoOk;
    var empresaOk;
    // emailServer: emailVar,
    // senhaServer: senhaVar,

    if (checkCamposCadastroEmpresa() && checkSenha()) {


        fetch("empresa/cadastrar/endereco", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cepServer: cep.replace(/[^\d]+/g, ''),
                bairroServer: bairro,
                ruaServer: rua,
                numeroServer: numero,
                estadoServer: estado,
                cidadeServer: cidade
            })
        }).then(function (resposta) {
            // console.log("resposta: ", resposta);
            if (resposta.ok) {
                resposta.json().then((jsonEndereco) => {

                    fetch("/empresa/cadastrar/empresa", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            // crie um atributo que recebe o valor recuperado aqui
                            // Agora vá para o arquivo routes/usuario.js
                            nomeResponsavelServer: nomeResponsavel,
                            razaoSocialServer: razaoSocial,
                            cnpjServer: cnpj.replace(/[^\d]+/g, ''),
                            telefoneServer: telefone.replace(/[^\d]+/g, ''),
                            telefoneOptionalServer: telefone1.replace(/[^\d]+/g, ''),
                            dominioServer: dominioVar,
                            fkEnderecoServer: jsonEndereco.insertId
                        })
                    }).then(function (resposta) {
                        resposta.json().then((jsonEmpresa) => {
                            if (resposta.ok) {

                                fetch("/empresa/cadastrar/funcionario", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        // crie um atributo que recebe o valor recuperado aqui
                                        // Agora vá para o arquivo routes/usuario.js
                                        nomeFuncionarioServer: nomeResponsavel,
                                        emailFuncionarioServer: emailFuncionario,
                                        senhaFuncionarioServer: senhaVar,
                                        telefoneFuncionarioServer: telefoneFuncionario.replace(/[^\d]+/g, ''),
                                        empresaFuncionarioServer: jsonEmpresa.insertId
                                    })
                                }).then(function (resposta) {
                                    if (resposta.ok) {

                                        fecharModal("#modalRegisterForm");

                                    } else {
                                        throw ("Houve um erro ao tentar realizar o cadastro!");

                                    }

                                }).catch(function (resposta) {
                                    console.log(`#ERRO: ${resposta}`);
                                    // finalizarAguardar();
                                });
                                return false;

                            } else {
                                throw ("Houve um erro ao tentar realizar o cadastro!");
                            }

                        }).catch(function (resposta) {
                            console.log(`#ERRO: ${resposta}`);
                            // finalizarAguardar();
                        });
                        return false;
                    })
                })

                console.log("ID do endereco adicionado " + idEnderecoAtual)
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            // finalizarAguardar();
        });
    }
}

function next() {

    var btnAdvance = document.getElementById("btnAvancar");
    var btnVoltar = document.getElementById("btnVoltar");
    var btnCadastrar = document.getElementById("btnCadastrar");
    var formCad = document.querySelectorAll("#formCadastro");
    btnAdvance.style = "display:none;";
    btnCadastrar.style = "display:block;";
    btnVoltar.style = "display:block;";
    formCad[0].style = "display:none;"
    formCad[1].style = "display:none;"
    formCad[2].style = "display:none;"
    formCad[3].style = "display:block;"
    formCad[4].style = "display:block;"





}

function back() {

    var btnAdvance = document.getElementById("btnAvancar");
    var btnVoltar = document.getElementById("btnVoltar");
    var btnCadastrar = document.getElementById("btnCadastrar");
    var formCad = document.querySelectorAll("#formCadastro");
    btnAdvance.style = "display:block;";
    btnCadastrar.style = "display:none;";
    btnVoltar.style = "display:none;";
    formCad[0].style = "display:block;"
    formCad[1].style = "display:block;"
    formCad[2].style = "display:block;"
    formCad[3].style = "display:none;"
    formCad[4].style = "display:none;"
}
function cep() {
    var cep = inpCep.value;
    var bairro = inpBairro.value;
    var rua = inpRua.value;
    var numero = inpNumero.value;
    var estado = inpEstado.value;
    var cidade = inpCidade.value;

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cep.length == 9) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.logradouro != null) {
                    inpRua.value = data.logradouro;
                }

                if (data.bairro != null) {
                    inpBairro.value = data.bairro;
                }

                if (data.localidade != null) {
                    inpCidade.value = data.localidade;
                }

                if (data.uf != null) {
                    inpEstado.value = data.uf;
                }

            })
            .catch(error => console.error('Erro ao obter informações do CEP', error));
    } else {
        Swal.fire({
            title: 'Cep Invalido',
            icon: 'error',
            confirmButtonText: 'Continuar'
        })
    }

}

function fecharModal(modal) {

    $(`${modal}`).modal('hide');
}
function abrirModal(modal) {

    $(`${modal}`).modal('show');
}


//Mask Test
//CleaverJS lib de masks
new Cleave('.cep-input', {
    delimiters: ['-'],
    blocks: [5, 3],
    numericOnly: true
});
new Cleave('.input-phone', {
    delimiters: ['(', ') ', ' - '],
    blocks: [0, 2, 5, 4]
});
new Cleave('.input-phone1', {
    delimiters: ['(', ') ', ' - '],
    blocks: [0, 2, 5, 4]
});
new Cleave('.input-phone2', {
    delimiters: ['(', ') ', ' - '],
    blocks: [0, 2, 5, 4]
});

new Cleave('.cnpjMask', {
    delimiters: ['.', '.', '/', '-'],
    blocks: [2, 3, 3, 4, 2],

});

function abrirCadastro(login, cadastro) {
    fecharModal(login);
    abrirModal(cadastro);
}

function abrirLogin(login, cadastro) {
    fecharModal(cadastro);
    abrirModal(login);
}