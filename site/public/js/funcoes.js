function validarSessao() {
    // aguardar();
    var i = 0;
    setInterval(() => {
        var email = sessionStorage.EMAIL_USUARIO;
        var nome = sessionStorage.NOME_USUARIO;
        var b_usuario = document.getElementById("b_usuario");
        console.log("Esta rodando")
        if (email != undefined && nome != undefined) {
            // window.alert(`Seja bem-vindo, ${nome}!`);

            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            if (i == 0) {
                Toast.fire({
                    icon: 'success',
                    title: 'Logado'
                })
                console.log("logado");
                i++;
            }
            // finalizarAguardar();
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })


            Toast.fire({
                icon: 'error',
                title: 'Você esta sendo disconectado'
            })
            sessionStorage.clear();
            window.location = "../index.html";
        }
    }, 2000);

}

function verificarPrimeiroAcesso() {
    var fkSupervisor = sessionStorage.getItem("FK_SUPERVISOR")
    var primeiroAcesso = sessionStorage.getItem("FIRST_ACESS")

    if (primeiroAcesso == 1 && fkSupervisor != null) {

        setTimeout(() => {

            
            var localAtual = window.location.href
            var localOk = "atualizarSenha.html"

           
            
            if (localAtual.indexOf(localOk) == -1) {

                
                alert(`Você vai ser redirecionado.`)
                window.location = localOk;
            
            } else {
                console.log("Já está na página.")
            }


        }, 4000)

    }

}

verificarPrimeiroAcesso()

function limparSessao() {
    console.log("Limpei")
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../index.html";
}


function verificarSupervisor() {

  document.addEventListener('DOMContentLoaded', function() {
    var nivelUsuario = sessionStorage.getItem("FK_SUPERVISOR");
    console.log(nivelUsuario);

    var linkColaboradores = document.querySelector('a[href="funcionarios.html"]');
    if (nivelUsuario == 'null') {
      linkColaboradores.style.display = 'flex';
    } else {
      linkColaboradores.style.display = 'none';
    }
  });

}

verificarSupervisor();



// carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.innerHTML = texto;
//     }
// }


// modal
// function mostrarModal() {
//     var divModal = document.getElementById("div_modal");
//     divModal.style.display = "flex";
// }

// function fecharModal() {
//     var divModal = document.getElementById("div_modal");
//     divModal.style.display = "none";
// }

