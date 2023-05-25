function listarFuncionarios() {
    var empresa = sessionStorage.FK_EMPRESA;
    var funcionarios;

    fetch(`/gerenciadorUsuario/listarTotens/${empresa}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO listar()!");

            if (resposta.ok) {
                resposta.json().then((json) => {

                    totens = json;
                    console.log(totens)
                    // for (var i = 0; i < funcionarios.length;) {

                    //     if (funcionarios[i].fkSupervisor != null) {

                    //         listaAtivosDiv.innerHTML += `<div class="item"> <span class="nomeItemLista">Nome: ${funcionarios[i].nome}</span> <span class="emailItemLista">Email: ${funcionarios[i].email}</span> 
                    //         <span class="telefoneItemLista"> Telefone: ${funcionarios[i].telefone}  </span>    
                    //         <button class="btnDelete" onclick="deleteFuncionario(${funcionarios[i].id})">Remover Acesso</button>`

                    //     }
                    //     i++;
                    // }
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