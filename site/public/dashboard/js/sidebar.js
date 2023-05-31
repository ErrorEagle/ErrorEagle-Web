// const sidebar = document.querySelector('.sidebar');

// // Define um temporizador que aguarda 20 segundos e, em seguida, fecha a barra lateral.
// setTimeout(() => {
//     sidebar.style.width = '30';
// }, 2000);

nomeSideBar.innerHTML += " " + sessionStorage.getItem("NOME_USUARIO");
// empresaSideBar.innerHTML += " " + sessionStorage.FK_EMPRESA;
var nomeDiv = document.getElementById("nomeTitulo")
nomeDiv.innerHTML += `Olá, ${sessionStorage.getItem("NOME_USUARIO")}!`
console.log("inserirNome");