var idMaquina = sessionStorage.getItem("ID_MAQUINA")

function listarConfigMaquina() {
    var idMaquina = sessionStorage.getItem("ID_MAQUINA")
    fetch(`/totem/listarConfigTotem/${idMaquina}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO listar()!");
            if (resposta.ok) {
                resposta.json().then((json) => {
                    const configTotem = json;
                    console.log("Configuração Totem")
                    // configuracoesMaquinaAtual.innerHTML += "Teste"
                    // // configuracoesMaquinaAtual.innerHtml += `configTotem[i].nomeComponente + " " + configTotem[i].capacidade`
                    for (var i = 0; i < configTotem.length; i++) {
                        configuracoesMaquinaAtual.innerHTML += `<li>${configTotem[i].nomeComponente} ${configTotem[i].capacidade.toFixed(2)} ${configTotem[i].unidadeMedida}</li>`
                    }
                });
            } else {
                console.log("Houve um erro ao tentar listar as Configuraçoes");
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
}
listarConfigMaquina()

const config = document.querySelector('#dash_config');
const cpu = document.querySelector('#dash_cpu');
const ram = document.querySelector('#dash_ram');
const disco = document.querySelector('#dash_disco');
const rede = document.querySelector('#dash_rede');

config.classList.add('d-flex');
cpu.classList.add('d-none');
ram.classList.add('d-none');
disco.classList.add('d-none');
rede.classList.add('d-none');

function exibirElemento(elemento) {
    elemento.classList.remove('d-none');
    elemento.classList.add('d-flex');
}

function ocultarElemento(elemento) {
    elemento.classList.remove('d-flex');
    elemento.classList.add('d-none');
}

function abrirPainel(elemento) {
    ocultarElemento(config);
    ocultarElemento(cpu);
    ocultarElemento(ram);
    ocultarElemento(disco);
    ocultarElemento(rede);
    exibirElemento(elemento);
}

function abrirConfiguracoes() {
    abrirPainel(config);
}

function abrirDashCpu() {
    abrirPainel(cpu);
}

function abrirDashRam() {
    abrirPainel(ram);
}

function abrirDashDisco() {
    abrirPainel(disco);
}

function abrirDashRede() {
    abrirPainel(rede);
}




const ctxCpu = document.getElementById('chartCpu');
var chartCpu1 = new Chart(ctxCpu, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'taxa',
            data: [],
            borderWidth: 1,
        }]
    },
    options: {

        plugins: {
            title: {
                display: true,
                align: 'center',
                text: 'Uso de CPU',
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 20
                },
                padding: {
                    top: '5px',
                    bottom: '5px',
                }
            }
        },


        scales: {
            y: {
                suggestedMax: 100,
                beginAtZero: true,
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
        },
        // legend: {
        //     labels: {
        //         fontColor: "#FFF"
        //     }
        // }

    }
});

const ctxRede = document.getElementById('chartRede');
var chartRede1 = new Chart(ctxRede, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'taxa',
            data: [],
            borderWidth: 1,
        }]
    },
    options: {

        plugins: {
            title: {
                display: true,
                align: 'center',
                text: 'Taxa de transferencia de rede',
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 20
                },
                padding: {
                    top: '5px',
                    bottom: '5px',
                }
            }
        },


        scales: {
            y: {
                suggestedMax: 100,
                beginAtZero: true,
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
        },
        // legend: {
        //     labels: {
        //         fontColor: "#FFF"
        //     }
        // }

    }
});

const ctxRam = document.getElementById('chartRam');
var chartRam1 = new Chart(ctxRam, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'taxa',
            data: [],
            borderWidth: 1,
        }]
    },
    options: {

        plugins: {
            title: {
                display: true,
                align: 'center',
                text: 'Uso de RAM',
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 20
                },
                padding: {
                    top: '5px',
                    bottom: '5px',
                }
            }
        },


        scales: {
            y: {
                suggestedMax: 100,
                beginAtZero: true,
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
        },
        // legend: {
        //     labels: {
        //         fontColor: "#FFF"
        //     }
        // }

    }
});
const ctxDisco = document.getElementById('chartDisco');
var chartDisco1 = new Chart(ctxDisco,
    {
        type: 'pie',
        data: {
            labels: [
                "Espaço do disco livre", "Espaço do disco em uso"
            ],
            datasets: [{
                label: ['Espaço %'],
                data: [300, 50],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Disco em uso'
                }
            }
        },
    }
);


function pegarDados(componente, idMaquina, grafico) {
    fetch(`/medidas/medidaMicro/${idMaquina}/${componente}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then((json) => {
                // Limpe os dados existentes
                grafico.data.labels = [];
                grafico.data.datasets[0].data = [];
                // Adicione os novos dados
                for (var i = json.length - 1; i >= 0; i--) {
                    if (componente == 3) {
                        grafico.data.labels.push("Livre", "Em uso");
                        grafico.data.datasets[0].data.push(json[i].percentual.toFixed(2), (100 - json[i].percentual.toFixed(2)));
                    } else {
                        grafico.data.labels.push(json[i].hora);
                        grafico.data.datasets[0].data.push(json[i].percentual.toFixed(2));
                    }
                }
                // Atualize o gráfico
                grafico.update();
            });
        } else {
            console.log("Não cadastrei um funcionário!");
        }
    });
}

pegarDados(1, idMaquina, chartCpu1);
pegarDados(2, idMaquina, chartRam1);
pegarDados(3, idMaquina, chartDisco1);
pegarDados(4, idMaquina, chartRede1);

setInterval(function () {
    pegarDados(1, idMaquina, chartCpu1);
    pegarDados(2, idMaquina, chartRam1);
    // pegarDados(3, idMaquina, chartDisco1);
    pegarDados(4, idMaquina, chartRede1);
}, 6000); // Executa a cada 5 segundos (5000 milissegundos)
