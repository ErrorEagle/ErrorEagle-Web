function listarQntdAlertas() {
    empresa = sessionStorage.getItem("FK_EMPRESA");
    // Obter a data atual
    var dataAtual = new Date();

    // Converter a data para o formato ISO (ano-mes-diaT00:00:00.000Z)
    var dataISO = dataAtual.toISOString();

    // Dividir a string nos separadores desejados
    var partesData = dataISO.split("T")[0].split("-");

    // Obter o ano, mês e dia separadamente
    var ano = partesData[0];
    var mes = partesData[1];
    var dia = partesData[2];

    // Formatar a data no formato "ano-mes-dia"
    var dataFormatada = ano + '-' + mes + '-' + dia;

    fetch(`/dashboardGeral/listarQntdAlertaDiario/${empresa}/${dataFormatada}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO listar()!");
            if (resposta.ok) {
                resposta.json().then((json) => {
                    const totalAlertas = json;
                    document.getElementById("qntAlertaHJ").innerHTML = totalAlertas.qtdAlertaDia
                });
            } else {
                console.log("Houve um erro ao tentar listar as Configuraçoes");
                resposta.text().then((texto) => {
                    console.error(texto);

                });
            }
        })
        .catch(function (erro) {
            console.log(erro);

        });
}

async function listarQntdAlertasN() {
    try {
        const empresa = sessionStorage.getItem("FK_EMPRESA");

        // Obter a data atual
        const dataAtual = new Date();

        // Converter a data para o formato ISO (ano-mes-diaT00:00:00.000Z)
        const dataISO = dataAtual.toISOString();

        // Dividir a string nos separadores desejados
        const partesData = dataISO.split("T")[0].split("-");

        // Obter o ano, mês e dia separadamente
        const ano = partesData[0];
        const mes = partesData[1];
        const dia = partesData[2];

        // Formatar a data no formato "ano-mes-dia"
        const dataFormatada = `${ano}-${mes}-${dia}`;
        const resposta = await fetch(`/dashboardGeral/listarQntdAlertaDiario/${empresa}/${dataFormatada}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (resposta.ok) {
            const json = await resposta.json();
            const totalAlertas = json;
            return totalAlertas.qtdAlertaDia;
        } else {
            console.log("Houve um erro ao tentar listar as Configurações");
            const texto = await resposta.text();
            console.error(texto);
        }
    } catch (erro) {
        console.log(erro);
    }
}

async function listarQntdAlertasTotal() {
    try {
        const empresa = sessionStorage.getItem("FK_EMPRESA");

        // Obter a data atual
        const dataAtual = new Date();

        // Converter a data para o formato ISO (ano-mes-diaT00:00:00.000Z)
        const dataISO = dataAtual.toISOString();

        // Dividir a string nos separadores desejados
        const partesData = dataISO.split("T")[0].split("-");

        // Obter o ano, mês e dia separadamente
        const ano = partesData[0];
        const mes = partesData[1];
        const dia = partesData[2];

        // Formatar a data no formato "ano-mes-dia"
        const dataFormatada = `${ano}-${mes}-${dia}`;

        const resposta = await fetch(`/dashboardGeral/listarQntdTotalAlertas/${empresa}/${dataFormatada}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (resposta.ok) {
            const json = await resposta.json();
            const totalAlertas = json;
            return totalAlertas.qtdAlertaDia;
        } else {
            console.log("Houve um erro ao tentar listar as Configurações");
            const texto = await resposta.text();
            console.error(texto);
        }
    } catch (erro) {
        console.log(erro);
    }
}


async function percentualAlertasForaIdeal() {
    let qntdNideal = await listarQntdAlertasN();
    let qntdTotal = await listarQntdAlertasTotal();
    let percentual = (qntdNideal / qntdTotal) * 100;
    document.getElementById("percentAlertaNideal").innerHTML = percentual.toFixed(2) + "%";
}



function listarAlertasRecentes() {
    empresa = sessionStorage.getItem("FK_EMPRESA");

    var dataAtual = new Date();
    var dataISO = dataAtual.toISOString();
    var partesData = dataISO.split("T")[0].split("-");
    var ano = partesData[0];
    var mes = partesData[1];
    var dia = partesData[2];
    var dataFormatada = ano + '-' + mes + '-' + dia;

    var mensagem = inpTipoMensagem.value;
    var componente = inpTipoComponente.value;

    fetch(`/dashboardGeral/listarAlertasFiltro/${componente}/${mensagem}/${empresa}/${dataFormatada}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO listar()!");

            if (resposta.ok) {
                resposta.text().then((texto) => {
                    if (texto.length > 0) {
                        var json = JSON.parse(texto);
                        relatorios = json;
                        console.log(relatorios);

                        // Limpar a lista existente
                        var listaAlerta = document.getElementById("listaAlerta");
                        listaAlerta.innerHTML = "";

                        if (relatorios.length === 0) {
                            var divItem = document.createElement("div");
                            divItem.className = "d-flex justify-content-center w-75 my-2 p-2 backButton";

                            var spanMensagem = document.createElement("span");
                            spanMensagem.innerText = "Não há alertas recentes.";
                            divItem.appendChild(spanMensagem);

                            listaAlerta.appendChild(divItem);
                        } else {
                            // Adicionar os itens do JSON na lista
                            relatorios.forEach((item) => {
                                var divItem = document.createElement("div");
                                divItem.className = "d-flex justify-content-between w-75 my-2 p-2 backButton";

                                var divBolinha = document.createElement("div");
                                if (item.mensagem === "Atenção") {
                                    divBolinha.className = "bolinhaAmerelo mx-4";
                                } else if (item.mensagem === "Urgente") {
                                    divBolinha.className = "bolinhaLaranja mx-4";
                                } else if (item.mensagem === "Crítico" || "Critico") {
                                    divBolinha.className = "bolinhaVermelha mx-4";
                                }
                                divItem.appendChild(divBolinha);

                                var spanMaquina = document.createElement("span");
                                spanMaquina.className = "listaAlertasNome";
                                spanMaquina.innerText = item.hostName;
                                divItem.appendChild(spanMaquina);

                                var spanTipo = document.createElement("span");
                                spanTipo.className = "mx-4";
                                spanTipo.innerText = item.nome;
                                divItem.appendChild(spanTipo);

                                listaAlerta.appendChild(divItem);
                            });
                        }
                    } else {
                        // JSON vazio
                        var listaAlerta = document.getElementById("listaAlerta");
                        listaAlerta.innerHTML = "";

                        var divItem = document.createElement("div");
                        divItem.className = "d-flex justify-content-center w-75 my-2 p-2 backButton";

                        var spanMensagem = document.createElement("span");
                        spanMensagem.innerText = "Não há alertas recentes.";
                        divItem.appendChild(spanMensagem);

                        listaAlerta.appendChild(divItem);
                    }
                });
            } else {
                console.log("Houve um erro ao tentar Listar");
                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });
}












console.log("Teste " + listarQntdAlertasN());

listarAlertasRecentes();

percentualAlertasForaIdeal();

listarQntdAlertas();

