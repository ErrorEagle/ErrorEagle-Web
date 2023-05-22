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

const bntGenerate = document.querySelector("#generate-pdf");

bntGenerate.addEventListener("click", () =>{
    

    if(validarCampo() == true){
            const content = document.querySelector(".relatorio-conteudo")

            var opt = {
            margin:       1,
            filename:     'ErrorEagle-relatório.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            html2pdf().set(opt).from(content).save();
    }

})