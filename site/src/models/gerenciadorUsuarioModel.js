var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
// function cadastrarFuncionario(nomeFuncionario, emailFuncionario, senhaFuncionario, telefoneFuncionario, empresaFuncionario, fkSupervisor) {
//     console.log("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEmpresa():", nomeFuncionario, emailFuncionario, senhaFuncionario, telefoneFuncionario, empresaFuncionario);
//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucao = `
//     insert into Funcionario (email, senha, nome, telefone, fkEmpresa, fkSupervisor) values 
//     ( '${emailFuncionario}', '${senhaFuncionario}' , '${nomeFuncionario}' , '${telefoneFuncionario}' ,${empresaFuncionario}, ${fkSupervisor});
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

function deletarUsuario(idFuncionario) {

    var instrucao = `update Funcionario SET statusFuncionario = 0 where id = ${idFuncionario};`


    return database.executar(instrucao);
}

function listarFuncionarios(idEmpresa) {
    console.log(idEmpresa)
    var instrucao = `SELECT * FROM Funcionario WHERE fkEmpresa = ${idEmpresa} AND statusFuncionario = 1;`
    return database.executar(instrucao);
}

function listarFuncionariosInativos(idEmpresa) {
    console.log(idEmpresa)
    var instrucao = `SELECT * FROM Funcionario WHERE fkEmpresa = ${idEmpresa} AND statusFuncionario = 0;
    `
    return database.executar(instrucao);
}

function atualizarPassword(idFuncionario, novaPass) {
    console.log(idFuncionario, novaPass)

    var instrucao = `UPDATE [dbo].[Funcionario]
    SET senha = '${novaPass}', firstacess = 0 WHERE id = ${idFuncionario};`
    console.log(instrucao);
    return database.executar(instrucao);
}


module.exports = {
    atualizarPassword,
    deletarUsuario, listarFuncionarios
    , listarFuncionariosInativos
};