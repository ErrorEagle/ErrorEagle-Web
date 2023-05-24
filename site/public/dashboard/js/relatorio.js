
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

    if(!tituloInput.value || !descricaoInput.value || !responsavelInput.value ){
        alert("Preencha os campo corretamente");
        return false
    }else if (!opcaoSelecionada) {
        alert("Selecione uma opção!");
        return false; 
    }

    return true;
}

function listarRelatorios(){
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

function baixarPdf(idRelatorio){
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
                resposta.json().then((json) =>{
                
                relatorioSelecionado = json;

                for (var i = 0; i < relatorioSelecionado.length;) {

                    var conteudo = `<H1> RELÁTORIO DE MANUTENÇÃO <H1> <BR>
                    N°idRelatorio: ${relatorioSelecionado[i].id} <br>
                    ID hostname: ${relatorioSelecionado[i].fkMaquina} <br>
                    Descrição incidente: ${relatorioSelecionado[i].descricaoIncidente} <br>
                    Descrição manutenção: ${relatorioSelecionado[i].descricaoManutenção} <br>
                    Dia manutenção: ${relatorioSelecionado[i].dataRelatorio} <br>
                    Quem fez: ${relatorioSelecionado[i].fkFuncionario} `;
                    
                i++;
            }
                

                 var opt = {
                 margin:       .2,
                 filename:     'ErrorEagle-relatório.pdf',
                  image:        { type: 'jpeg', quality: 0.98 },
                 html2canvas:  { scale: 2 },
                 jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
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