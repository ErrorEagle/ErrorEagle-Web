
//SIDEBAR

nomeSideBar.innerHTML += " " + sessionStorage.getItem("NOME_USUARIO");
// empresaSideBar.innerHTML += " " + sessionStorage.FK_EMPRESA;

//TITULO ATUALIZAR SENHA
var nomeDiv = document.getElementById("nomeTitulo")
nomeDiv.innerHTML += `Olá, ${sessionStorage.getItem("NOME_USUARIO")}!`



