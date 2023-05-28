var tituloInput = document.getElementById('titulo');
var descricaoManutencaoInput = document.getElementById('descricaoManutencao');
var descricaoIncidenteInput = document.getElementById('descricaoIncidente');
var dataManutencaoInput = document.getElementById('dataM')

var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1;
var ano = dataAtual.getFullYear();
if (dia < 10) {
    dia = '0' + dia;
  }
  
  if (mes < 10) {
    mes = '0' + mes;
  }
  
var dataFormatada = ano + "-" + mes + "-" + dia;

console.log(dataFormatada);

function gerarRelatorio() {
    var fkFuncionario = sessionStorage.ID_FUNCIONARIO
    var fkEmpresa = sessionStorage.FK_EMPRESA
    var fkMaquina = '1'

    if (!tituloInput.value || !descricaoIncidenteInput.value || !descricaoManutencaoInput.value || !dataManutencaoInput.value) {
        alert("Preencha os campo corretamente");
    } else {
    console.log(dataManutencaoInput.value)
    fetch("/relatorio/gerarRelatorio", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            tituloServer: tituloInput.value,
            descricaoIncidenteServer: descricaoIncidenteInput.value,
            descricaoManutencaoServer:descricaoManutencaoInput.value,
            dataManutencaoServer:dataManutencaoInput.value,
            dataRelatorioServer:dataFormatada,
            fkMaquinaServer:"2",
            fkFuncionarioServer: fkFuncionario,
            fkEmpresaServer: fkEmpresa
        })
    }).then(function (resposta) {
        if(resposta.ok){
            console.log('Enviado para o banco')
        }else{
            console.log('Erro ao enviar para o banco')
        }
    }).catch(function (erro) {
        console.log(erro);
    })
}
    
}