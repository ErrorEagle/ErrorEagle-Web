var tituloInput = document.getElementById('titulo');
var descricaoInput = document.getElementById('descricao');
var dataInput = document.getElementById('dataM')

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
  
var dataFormatada = dia + "/" + mes + "/" + ano;

console.log(dataFormatada);

function validarCampo() {

    if (!tituloInput.value || !descricaoInput.value || !responsavelInput.value || !dataInput.value) {
        alert("Preencha os campo corretamente");
        return false
    } else {

    }
    
}