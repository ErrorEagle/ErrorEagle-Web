
function listarRelatorios() {
    var empresa = sessionStorage.FK_EMPRESA;
    var relatorios;

    fetch(`/relatorio/listarRelatorios/${empresa}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO listar()!");

            if (resposta.ok) {
                resposta.json().then((json) => {

                    relatorios = json;
                    console.log(relatorios)
                    for (var i = 0; i < relatorios.length;) {



                        listaRelatorios.innerHTML += `<div class="item"> <span class="nomeItemLista">Titulo: ${relatorios[i].titulo}</span>
                            <div class="item"> <span class="nomeItemLista">Data criação: ${(relatorios[i].dataRelatorio)}</span>   
                            <button class="btnDelete" id="#generate-pdf" onclick="baixarPdf(${relatorios[i].id})">Baixar PDF</button>`


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

function converterStringParaData(stringData) {
    const partes = stringData.split(' ');
    const dataPartes = partes[0].split('/');
    const horaPartes = partes[1].split(':');
    
    const dia = parseInt(dataPartes[0], 10);
    const mes = parseInt(dataPartes[1], 10) - 1; // Mês começa em 0 no JavaScript
    const ano = parseInt(dataPartes[2], 10);
    const hora = parseInt(horaPartes[0], 10);
    const minuto = parseInt(horaPartes[1], 10);
    const segundo = parseInt(horaPartes[2], 10);
    
    return new Date(ano, mes, dia, hora, minuto, segundo);
  }

function baixarPdf(idRelatorio) {
    var relatorioSelecionado

    fetch(`/relatorio/listarRelatorio/${idRelatorio}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO listar()!");

            if (resposta.ok) {
                resposta.json().then((json) => {

                    relatorioSelecionado = json;
                    

                    for (var i = 0; i < relatorioSelecionado.length;) {

                        const data_manutencao_obj = converterStringParaData(relatorioSelecionado[i].data_manutencao);
                        const data_relatorio_obj = converterStringParaData(relatorioSelecionado[i].data_relatorio);
                        const formatoDataPtBR = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
                        const data_manutencao_formatada = formatoDataPtBR.format(data_manutencao_obj);
                        const data_relatorio_formatada = formatoDataPtBR.format(data_relatorio_obj);

                        var conteudo = `
                    <!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Relatório</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 50px;
        }

        h1 {
            color: #3366cc;
            text-align: center;
        }

        .section {
            margin-bottom: 30px;
        }

        .section-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 5px;
            text-transform: uppercase;
        }

        .section-content {
            font-size: 16px;
            line-height: 1.5;
        }
    </style>
</head>

<body>
    <h1>RELÁTORIO DE MANUTENÇÃO</h1>

    <div class="section">
        <div class="section-title">N° idRelatorio:</div>
        <div class="section-content">${relatorioSelecionado[i].id}</div>
    </div>

    <div class="section">
        <div class="section-title">ID hostname:</div>
        <div class="section-content">${relatorioSelecionado[i].hostName}</div>
    </div>

    <div class="section">
        <div class="section-title">Descrição incidente:</div>
        <div class="section-content">${relatorioSelecionado[i].descricaoIncidente}</div>
    </div>

    <div class="section">
        <div class="section-title">Descrição manutenção:</div>
        <div class="section-content">${relatorioSelecionado[i].descricaoManutencao}</div>
    </div>

    <div class="section">
        <div class="section-title">Dia manutenção:</div>
        <div class="section-content">${data_manutencao_formatada}</div>
    </div>
    <div class="section">
        <div class="section-title">Dia relatorio:</div>
        <div class="section-content">${data_relatorio_formatada}</div>
    </div>

    <div class="section">
        <div class="section-title">Assinatura:</div>
        <div class="section-content">${relatorioSelecionado[i].nome}</div>
    </div>
</body>

</html>`;

                        i++;
                    }


                    var opt = {
                        margin: .2,
                        filename: 'ErrorEagle-relatório.pdf',
                        image: { type: 'jpeg', quality: 0.98 },
                        html2canvas: { scale: 2 },
                        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                    };

                    html2pdf().set(opt).from(conteudo).save();

                })



            } else {
                console.log("Houve um erro ao tentar Lista");
                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        })
}

// const bntGenerate = document.querySelector("#generate-pdf");

// bntGenerate.addEventListener("click", () =>{


//     if(validarCampo() == true){
//                 var conteudo = `<H1> RELÁTORIO DE MANUTENÇÃO <H1> <BR>
//                                 N°idRelatorio:<br>
//                                 ID hostname: <br>
//                                 Descrição incidente: <br>
//                                 Descrição manutenção: <br>
//                                 Dia manutenção: <br>
//                                 Quem fez: `;


//                 var opt = {
//                 margin:       .2,
//                 filename:     'ErrorEagle-relatório.pdf',
//                 image:        { type: 'jpeg', quality: 0.98 },
//                 html2canvas:  { scale: 2 },
//                 jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//                 };

//                 html2pdf().set(opt).from(conteudo).save();
//     }

// })

listarRelatorios()