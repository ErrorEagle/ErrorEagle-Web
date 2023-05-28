
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
const ctxDisco = document.getElementById('chartDisco');
const ctxRam = document.getElementById('chartRam');
const ctxRede = document.getElementById('chartRede');

var myChartCpu1 = new Chart(ctxCpu, {
    type: 'line',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [{
            label: 'taxa',
            data: [12, 19, 3, 5, 7, 13, 6, 100],
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

var myChartRede1 = new Chart(ctxRede, {
    type: 'line',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [{
            label: 'taxa',
            data: [12, 19, 3, 5, 7, 13, 6, 100],
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

var myChartRam1 = new Chart(ctxRam, {
    type: 'line',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [{
            label: 'taxa',
            data: [12, 19, 3, 5, 7, 13, 6, 100],
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

var myChartCpu1 = new Chart(ctxDisco, {
    type: 'line',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [{
            label: 'taxa',
            data: [12, 19, 3, 5, 7, 13, 6, 100],
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




