var database = require("../database/config")

function gerarRelatorio(data) {
    console.log(data)
    var instrucao = `SELECT * FROM Funcionario WHERE fkEmpresa = ${data} AND statusFuncionario = 0;
    `
    return database.executar(instrucao);
}


module.exports = {
    gerarRelatorio
};