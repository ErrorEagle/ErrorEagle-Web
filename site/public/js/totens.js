

function listarAlertas(idMaquina) {
    return new Promise((resolve, reject) => {
        fetch(`/totem/listarAlertasTotem/${idMaquina}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function (resposta) {
                console.log("ESTOU NO THEN DO listar()!");

                if (resposta.ok) {
                    resposta.json().then((json) => {
                        const alertas = json;
                        resolve(alertas);
                    });
                } else {
                    console.log("Houve um erro ao tentar listar os totens");
                    resposta.text().then((texto) => {
                        console.error(texto);
                        reject(texto);
                    });
                }
            })
            .catch(function (erro) {
                console.log(erro);
                reject(erro);
            });
    });
}

async function listarTotens() {
    var empresa = sessionStorage.FK_EMPRESA;
    var totens;

    try {
        const resposta = await fetch(`/totem/listarTotens/${empresa}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (resposta.ok) {
            const json = await resposta.json();
            totens = json;

            for (var i = 0; i < totens.length; i++) {
                var alertaListaAtual;
                try {
                    const alertas = await listarAlertas(totens[i].id);
                    alertaListaAtual = alertas;
                    var stringImage;
                    if (alertaListaAtual && alertaListaAtual.length > 0) {
                        if (alertaListaAtual[0].id == 4) {
                            stringImage = '../assets/icon/red.png';
                        } else if (alertaListaAtual[0].id == 3 || alertaListaAtual[0].id == 2) {
                            stringImage = '../assets/icon/orange.png';
                        } else if (alertaListaAtual[0].id == 1) {
                            stringImage = '../assets/icon/green.png';
                        }
                    }
                    var msgAtencao = " ";
                    for (var l = 0; l < alertaListaAtual.length; l++) {
                        msgAtencao += `${alertaListaAtual[l].nome} `
                        console.log(msgAtencao)
                    }
                    console.log(msgAtencao)

                    // Crie os elementos do HTML
                    var div = document.createElement("div");
                    div.className = "d-flex justify-content-around text-light justify-content-center align-items-center";
                    div.id = "itenList";

                    var img = document.createElement("img");
                    img.className = "imgAlert";
                    img.src = stringImage;
                    img.alt = "alerta";

                    var h3 = document.createElement("h3");
                    h3.className = "nomeMaquina";
                    h3.textContent = totens[i].hostName;

                    var p = document.createElement("h3");
                    p.className = "atencaoItens";
                    p.textContent = msgAtencao;

                    // Adicione o event listener à div
                    div.addEventListener("click", (function (id) {
                        return function () {
                            console.log("IdMaquina selecionada: " + id)
                        };
                    })(totens[i].id));

                    // Adicione os elementos à div
                    div.appendChild(img);
                    div.appendChild(h3);
                    div.appendChild(p)

                    // Adicione a div à listaMaquinas
                    listaMaquinas.appendChild(div);
                } catch (erro) {
                    console.error(erro);
                }
            }
        } else {
            console.log("Houve um erro ao tentar listar os totens");
            const texto = await resposta.text();
            console.error(texto);
        }
    } catch (erro) {
        console.log(erro);
    }
}





console.log("Listando Totens")
listarTotens();
