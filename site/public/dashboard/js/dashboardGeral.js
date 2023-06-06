const ctxGrafico1 = document.getElementById('chart1');
var chart1 = new Chart(ctxGrafico1, {
    type: 'line',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [{
            label: 'Essa Semana',
            data: [],
            borderWidth: 1,
        }, {
            label: 'Semana Passada',
            data: [],
            borderWidth: 1,
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                align: 'center',
                text: 'Percentual de alertas críticos por dia em relação à semana passada',
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 18
                },
                padding: {
                    top: '5px',
                    bottom: '5px',
                }
            },
            legend: {
                labels: {
                    color: 'white' // Define a cor dos rótulos como branco
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                },
                grid: {
                    color: 'white'
                }
            },
            x: {
                ticks: {
                    color: 'white',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                },
                grid: {
                    color: 'gray'
                }
            }
        }
    }
});

const ctxGrafico2 = document.getElementById('chart2');
var chart2 = new Chart(ctxGrafico2, {
    type: 'bar',
    data: {
        labels: ['Críticos', 'Urgentes', 'Atenção', "Ideal"],
        datasets: [{
            label: 'Percentual de alertas',
            data: [],
            backgroundColor: [
                'rgb(255,15,15)',
                'rgb(255, 107, 0)',
                'rgb(255, 245, 15)',
                'rgb(15, 255, 25)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Percentual do total de alertas fora do ideal de hoje',
                font: {
                    size: 20
                },
                color: 'white',
                padding: {
                    top: 10,
                    bottom: 20
                }
            },
            legend: {
                display: false
            },
            labels: {
                color: 'white' // Define a cor dos rótulos como branco
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: 'white'
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: 'white',
                    beginAtZero: true
                }
            }
        }
    }
});


Chart.defaults.color = '#FFF';

const cty = document.getElementById('grafico2');

const data = {
    labels: ['Atenção', 'Críticos', 'Urgentes'],
    datasets: [{
        label: 'My First Dataset',
        data: [],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};


const options = {
    plugins: {
        title: {
            display: true,
            text: 'Percentual do total de alertas fora do ideal de hoje',
            font: {
                size: 20
            },
            padding: {
                top: 10,
                bottom: 20
            }
        }, color: 'white',
        legend: {
            display: false
        }
    },
    scales: {
        x: {
            stacked: true,
            ticks: {
                color: '#FFFFFF'
            }
        },
        y: {
            stacked: true,
            ticks: {
                color: '#FFFFFF',
                beginAtZero: true
            }
        }
    }
};



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
function obterDiaDaSemana(dataFormatada) {
    var diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    var data = new Date(dataFormatada);
    var diaDaSemana = diasDaSemana[data.getDay()];
    return diaDaSemana;
}

function getLastSevenDays() {
    var dates = [];
    var today = new Date(); // Data atual
    today.setHours(0, 0, 0, 0); // Define as horas, minutos, segundos e milissegundos como zero para considerar apenas a data

    for (var i = 0; i < 7; i++) {
        var date = new Date(today);
        date.setDate(today.getDate() - i); // Subtrai o número de dias
        var formattedDate = date.toISOString().split('T')[0]; // Formata para 'ano-mês-dia'
        dates.push(formattedDate);
    }

    return dates;
}

function getLastWeekDays() {
    var dates = [];
    var today = new Date(); // Data atual
    today.setDate(today.getDate() - 7); // Subtrai 7 dias
    today.setHours(0, 0, 0, 0); // Define as horas, minutos, segundos e milissegundos como zero para considerar apenas a data

    for (var i = 0; i < 7; i++) {
        var date = new Date(today);
        date.setDate(today.getDate() - i); // Subtrai o número de dias
        var formattedDate = date.toISOString().split('T')[0]; // Formata para 'ano-mês-dia'
        dates.push(formattedDate);
    }

    return dates;
}

function getAlertasLastWeek() {
    const dates = getLastWeekDays();
    const empresa = sessionStorage.getItem("FK_EMPRESA");
    const mensagem = selectCriticidade.value;
    const promises = [];

    for (const date of dates) {
        const promise = fetch(`/dashboardGeral/listarAlertasDia/${mensagem}/${empresa}/${date}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function (resposta) {
                if (resposta.ok) {
                    return resposta.json().then((json) => {
                        return {
                            data: date,
                            valor: json[0].qntdDia
                        };
                    });
                } else {
                    console.log("Houve um erro ao tentar listar as Configurações");
                    return resposta.text().then((texto) => {
                        console.error(texto);
                        return {
                            data: date,
                            valor: 0 // ou qualquer valor padrão que você queira retornar em caso de erro
                        };
                    });
                }
            })
            .catch(function (erro) {
                console.log(erro);
                return {
                    data: date,
                    valor: 0 // ou qualquer valor padrão que você queira retornar em caso de erro
                };
            });

        promises.push(promise);
    }

    return Promise.all(promises);
}


function getAlertasUltimosSeteDias() {
    const dates = getLastSevenDays();
    const empresa = sessionStorage.getItem("FK_EMPRESA");
    const mensagem = selectCriticidade.value;
    const promises = [];

    for (const date of dates) {
        const promise = fetch(`/dashboardGeral/listarAlertasDia/${mensagem}/${empresa}/${date}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function (resposta) {
                if (resposta.ok) {
                    return resposta.json().then((json) => {

                        return {
                            data: date,
                            valor: json[0].qntdDia
                        };
                    });
                } else {
                    console.log("Houve um erro ao tentar listar as Configurações");
                    return resposta.text().then((texto) => {
                        console.error(texto);
                        return {
                            data: date,
                            valor: 0 // ou qualquer valor padrão que você queira retornar em caso de erro
                        };
                    });
                }
            })


            .catch(function (erro) {
                console.log(erro);
                return {
                    data: date,
                    valor: 0 // ou qualquer valor padrão que você queira retornar em caso de erro
                };
            });

        promises.push(promise);
    }

    return Promise.all(promises);
}
function atualizarGraficoss(porcentagemAtencao, porcentagemCritico, porcentagemUrgente, porcentagemIdeal) {
    chart2.data.datasets[0].data = [];
    chart2.data.datasets[0].data = [porcentagemCritico, porcentagemUrgente, porcentagemAtencao, porcentagemIdeal];
    chart2.update();
}

async function porcentagemAlertas() {
    empresa = sessionStorage.getItem("FK_EMPRESA");
    var dataAtual = new Date();
    var dataISO = dataAtual.toISOString();
    var partesData = dataISO.split("T")[0].split("-");
    var ano = partesData[0];
    var mes = partesData[1];
    var dia = partesData[2];
    var dataFormatada = ano + '-' + mes + '-' + dia;
    var componente = selectNivelComponente.value;

    try {
        const resposta = await fetch(`/dashboardGeral/porcentagemAlertas/${componente}/${empresa}/${dataFormatada}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (resposta.ok) {
            const json = await resposta.json();
            const totalAlertas = json;

            return totalAlertas;

        } else {
            console.log("Houve um erro ao tentar listar quantidades");
            const texto = await resposta.text();
            console.error(texto);
        }
    } catch (erro) {
        console.log(erro);
    }
}

async function obterDadosPorcentagemAlertas() {
    try {
        const totalAlertas = await porcentagemAlertas();
        var total = totalAlertas[0].totalAlertas;
        var ideal = totalAlertas[0].totalIdeal;
        var atencao = totalAlertas[0].totalAtencao;
        var critico = totalAlertas[0].totalCritico;
        var urgente = totalAlertas[0].totalUrgente;
        console.log(ideal)
        if (ideal != 0) {
            var porcentagemIdeal = (ideal / total) * 100;
        } else {
            var porcentagemIdeal = 0;
        }
        if (atencao != 0) {
            var porcentagemAtencao = (atencao / total) * 100;
        } else {
            var porcentagemAtencao = 0;
        }
        if (critico != 0) {
            var porcentagemCritico = (critico / total) * 100;
        } else {
            var porcentagemCritico = 0;
        }
        if (urgente != 0) {
            var porcentagemUrgente = (urgente / total) * 100;
        }
        else {
            var porcentagemUrgente = 0;
        }


        console.log(total, ideal, atencao, critico, urgente);
        console.log(porcentagemIdeal, porcentagemAtencao, porcentagemCritico, porcentagemUrgente);

        atualizarGraficoss(porcentagemAtencao, porcentagemCritico, porcentagemUrgente, porcentagemIdeal);
    } catch (erro) {
        console.log(erro);
    }
}




var valoresSemana = [];

var valoresSemana2 = [];
var dias = [];

// Chame a função getAlertasUltimosSeteDias() para obter os valores dos alertas

function atualizarGrafico() {
    // Limpar os arrays de valores
    valoresSemana = [];
    dias = [];
    valoresSemana2 = [];
    obterDadosPorcentagemAlertas();
    getAlertasUltimosSeteDias()
        .then((valores) => {
            // Ordenar os valores pelo dia da semana em ordem numérica
            valores.sort((a, b) => {
                const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
                const diaSemanaA = diasDaSemana.indexOf(a.data);
                const diaSemanaB = diasDaSemana.indexOf(b.data);
                return diaSemanaA - diaSemanaB;
            });

            // Preencha o array valoresSemana com os valores dos alertas da semana
            for (const valor of valores) {
                valoresSemana.push(valor.valor);
                dias.push(getDiaSemana(valor.data));
            }

            // Função para obter o dia da semana a partir da data
            function getDiaSemana(data) {
                const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
                const dataObj = new Date(data);
                return diasDaSemana[dataObj.getDay()];
            }

            // Atualize os dados do gráfico com os valores da semana
            chart1.data.datasets[0].data = valoresSemana;
            chart1.data.labels = dias;

            // Atualize o gráfico
            chart1.update();
        })
        .catch((erro) => {
            console.error(erro);
        });

    getAlertasLastWeek()
        .then((valores) => {
            // Ordenar os valores pela data no formato "ano-mês-dia"
            valores.sort((a, b) => {
                const dataA = a.data;
                const dataB = b.data;
                return dataA.localeCompare(dataB);
            });

            // Preencha o array valoresSemana com os valores dos alertas da semana
            for (const valor of valores) {
                valoresSemana2.push(valor.valor);
            }

            // Atualize os dados do gráfico com os valores da semana passada
            chart1.data.datasets[1].data = valoresSemana2;

            // Atualize o gráfico
            chart1.update();
        })
        .catch((erro) => {
            console.error(erro);
        });
}

// Chamar a função inicialmente


// Atualizar o gráfico a cada 15 segundos
setInterval(atualizarGrafico, 15000);

listarAlertasRecentes();

percentualAlertasForaIdeal();

listarQntdAlertas();

// Variável para armazenar o ID do intervalo
let intervaloAtualizacao;

// Função para iniciar o intervalo de atualização
function iniciarAtualizacao() {
    intervaloAtualizacao = setInterval(atualizarGrafico, 15000);
}

// Função para parar o intervalo de atualização
function pararAtualizacao() {
    clearInterval(intervaloAtualizacao);
}

// Event listener para o evento 'change' do <select>
document.getElementById('selectCriticidade').addEventListener('change', function () {
    // Parar o intervalo de atualização
    pararAtualizacao();

    // Chamar a função para atualizar o gráfico imediatamente
    atualizarGrafico();

    // Iniciar o intervalo de atualização novamente
    iniciarAtualizacao();
});

function atualizar() {
    console.log("Atualizando...");
    listarAlertasRecentes();

    percentualAlertasForaIdeal();

    listarQntdAlertas();
}

atualizarGrafico();

setInterval(atualizar, 5000);
