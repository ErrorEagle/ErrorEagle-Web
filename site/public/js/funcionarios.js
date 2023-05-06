function checkCamposCadastroFuncionario() {
    var nomeFuncionario = nomeCadastro.value
    var emailFuncionario = inpEmailCadastro.value
    var telefoneFuncionario = inpTelefoneFuncionario.value
    var senhaVar = inpSenhaCadastro.value
    var senhaConfirmVar = inpSenhaConfirmacao.value

    let hasEmptyFields = false; // flag para verificar se há campos vazios

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

function listarFuncionarios() {
    var empresa = sessionStorage.FK_EMPRESA;
    var funcionarios;

    fetch(`/gerenciadorUsuario/listarFuncionarios/${empresa}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO listar()!");

            if (resposta.ok) {
                resposta.json().then((json) => {

                    funcionarios = json;
                    for (var i = 0; i < funcionarios.length;) {

                        if (funcionarios[i].fkSupervisor != null) {

                            listaAtivosDiv.innerHTML += `<div class="item"> <span class="nomeItemLista">Nome: ${funcionarios[i].nome}</span> <span class="emailItemLista">Email: ${funcionarios[i].email}</span> 
                            <span class="telefoneItemLista"> Telefone: ${funcionarios[i].telefone}  </span>    
                            <button class="btnDelete" onclick="deleteFuncionario(${funcionarios[i].id})">Remover Acesso</button>`

                        }
                        i++;
                    }
                });
            } else {
                console.log("Houve um erro ao tentar Lista");
                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });


}

function listarFuncionariosInativos() {
    var empresa = sessionStorage.FK_EMPRESA;
    var funcionarios;

    fetch(`/gerenciadorUsuario/listarFuncionariosInativos/${empresa}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO listar()!");

            if (resposta.ok) {
                resposta.json().then((json) => {

                    funcionarios = json;
                    for (var i = 0; i < funcionarios.length;) {

                        if (funcionarios[i].fkSupervisor == null) {



                        } else {

                            listaInativosDiv.innerHTML += `<div class="item"> <span class="nomeItemLista">Nome: ${funcionarios[i].nome}</span> <span class="emailItemLista">Email: ${funcionarios[i].email}</span> <span
                        class="telefoneItemLista"> Telefone: ${funcionarios[i].telefone}  </span>
                   `
                        }
                        i++;
                    }
                });
            } else {
                console.log("Houve um erro ao tentar Lista");
                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });


}

function fecharModal(modal) {

    $(`${modal}`).modal('hide');
}

function cadastrarFuncionario() {

    var nomeResponsavel = nomeCadastro.value;
    var emailFuncionario = inpEmailCadastro.value;
    var telefoneFuncionario = inpTelefoneFuncionario.value;
    var senhaVar = inpSenhaCadastro.value;

    if (checkCamposCadastroFuncionario) {
        fetch("/empresa/cadastrar/funcionario/sistema", {
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
                empresaFuncionarioServer: sessionStorage.getItem("FK_EMPRESA"),
                supervisorFuncionarioServer: sessionStorage.getItem("ID_FUNCIONARIO")
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                window.location.reload();
                fecharModal("#modalRegisterForm");

            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");

            }

        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            // finalizarAguardar();
        });
    }
}

async function deleteFuncionario(idFuncionario) {

    var idFuncionar

    const { value: password } = await Swal.fire({
        title: 'Digite a sua senha',
        input: 'password',
        inputLabel: 'Senha supervisor',
        inputPlaceholder: '',
        inputAttributes: {
            autocapitalize: 'off',
            autocorrect: 'off'
        }
    })

    var emailVar = sessionStorage.EMAIL_USUARIO;
    var senhaVar = password;

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);
    if (password == sessionStorage.getItem("SENHA_USUARIO")) {
        fetch(`/gerenciadorUsuario/deletar/funcionario/${idFuncionario}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function (resposta) {
                console.log("ESTOU NO THEN DO listar()!");

                if (resposta.ok) {

                    limparLista()
                    listarFuncionarios()
                    listarFuncionariosInativos()

                } else {
                    console.log("Houve um erro ao tentar Lista");
                    resposta.text().then((texto) => {
                        console.error(texto);
                    });
                }
            })
            .catch(function (erro) {
                console.log(erro);
            });
        Swal.fire(`Usuario selecionado não possue mais acesso`)
    } else {
        Swal.fire(`Senha Invalida`)
    }

}

/* -----------------------EXECUTANDO FUNCÕES-------------------------- */
listarFuncionarios()
listarFuncionariosInativos()

// for (var i = 0; i < funcionarios.length; i++) {

//     console.log(funcionarios[i] + "testeyhstggfd");

// 

