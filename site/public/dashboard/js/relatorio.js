
var radioButtons = document.getElementsByName('bolinha');
var tituloInput = document.getElementById('titulo');
var descricaoInput = document.getElementById('descricao');
var responsavelInput = document.getElementById('responsavel');

function validarCampo() {
    var opcaoSelecionada = false;

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            opcaoSelecionada = true;
            break;
        }
    }

    if (!tituloInput.value || !descricaoInput.value || !responsavelInput.value) {
        alert("Preencha os campo corretamente");
        return false
    } else if (!opcaoSelecionada) {
        alert("Selecione uma opção!");
        return false;
    }

    return true;
}

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



                        listaRelatorios.innerHTML += `<div class="item"> <span class="nomeItemLista">Titulo: ${relatorios[i].descricaoIncidente}</span>
                            <div class="item"> <span class="nomeItemLista">Data criação: ${relatorios[i].dataRelatorio}</span>   
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
        <div class="section-content">${relatorioSelecionado[i].data_manutencao}</div>
    </div>
    <div class="section">
        <div class="section-title">Dia relatorio:</div>
        <div class="section-content">${relatorioSelecionado[i].data_relatorio}</div>
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