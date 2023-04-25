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


function limparSessao() {
    console.log("Limpei")
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../index.html";
}

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

