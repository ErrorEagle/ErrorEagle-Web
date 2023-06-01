
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
                        listaRelatorios.innerHTML += `<div class="item"> <span class="nomeItemLista">Titulo: ${relatorios[i].titulo}</span> <span class="nomeItemLista">Data criação: ${(relatorios[i].dataRelatorio)}</span>   
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
                        var data_relatorio_formatada = formatoDataPtBR.format(data_relatorio_obj);
                        var tituloRelatorio = relatorioSelecionado[i].titulo

                        var conteudo = `
                        <!DOCTYPE html>
                        <html>
                        <head>
                          <meta charset="UTF-8">
                          <title>Relatório de Manutenção</title>
                          <style>
                          body {
                            font-family: Arial, sans-serif;
                         }
                      
                         .page {
                            box-sizing: border-box;
                            background-color: white;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                         }
                      
                         .relatorio {
                            display: flex;
                            flex-wrap: wrap;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: center;
                            width: 60%; /* Ajuste o valor para aumentar ou diminuir o tamanho da caixa */
                         }
                      
                         .titulo {
                            background-size: 80%;
                            padding: 30px; 
                         }
                      
                         .caixa-1 {
                            flex-basis: 50%;
                            display: flex;
                            margin-bottom: 20px; /* Adiciona espaçamento entre as caixas */
                         }
                      
                         .conteudo-2-caixa1{
                            margin-left: 65px;
                         }
                      
                         .descricao1,
                         .descricao2,
                         .dataM,
                         .dataR {
                            flex-basis: 100%;
                            margin-bottom: 40px; /* Adiciona espaçamento entre as descrições e dados */
                            align-items: start;
                         }
                      
                         .relatorio.assinatura {
                            margin-top: 20px;
                            display: flex;
                            justify-content: start;
                            position: relative; 
                         }
                      
                         .assinatura {
                            margin-right: 2cm;
                            text-align: center;
                         }
                      
                         .conteudo-assinatura {
                            position: absolute;
                            bottom: 100%;
                            margin-left: 100px;
                         }
                         .section-content {
                            font-size: 16px;
                            line-height: 1.5;
                         }
                      
                         .relatorio p {
                            margin-bottom: 0;
                         }
                          </style>
                        </head>
                        <body>
                        <div class="page">
                          <h1 class="titulo"><b>Relatório de Manutenção</b></h1>
                          
                          <div class="relatorio">
                            <div class="caixa-1">
                                <div class="conteudo-caixa1">
                                    <p>N °1 - <b>ID RELATORIO</b></p>
                                    <div class="section-content">${relatorioSelecionado[i].id}</div>
                                </div>
                                <div class="conteudo-2-caixa1">
                                    <p>N °2 - <b>HOSTNAME</b></p>
                                    <div class="section-content">${relatorioSelecionado[i].hostName}</div>
                                </div>
                            </div>
                            <div class="descricao1">
                                <p>N °3 - <b>DESCRIÇÃO INCIDENTE</b></p>
                                <div class="section-content">${relatorioSelecionado[i].descricaoIncidente}</div>
                            </div>
                            <div class="descricao2">
                                <p>N °4 - <b>DESCRIÇÃO MANUTENÇÃO</b></p>
                                <div class="section-content">${relatorioSelecionado[i].descricaoManutencao}</div>
                            </div>
                            <div class="dataM">
                                <p>N °5 - <b>DATA MANUTENÇÃO</b></p>
                                <div class="section-content">${data_manutencao_formatada}</div>
                            </div>
                            <div class="dataR">
                                <p>N °6 - <b>DATA RELATÓRIO</b></p>
                                <div class="section-content">${data_relatorio_formatada}</div>
                            </div>
                            <div class="relatorio assinatura">
                                <div class="conteudo-assinatura">${relatorioSelecionado[i].nome}</div>
                                <p> ______________________________________</p>
                                <p><b>Assinatura do responsável</b></p>
                              </div>
                            </div>
                            
                          </div>
                        </body>
                        </html>
                        `;

                        i++;
                    }


                    var opt = {
                        margin: .2,
                        filename: `${tituloRelatorio}-${data_relatorio_formatada}.pdf`,
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