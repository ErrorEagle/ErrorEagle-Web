var database = require("../database/config")

function listarRelatorios(fkEmpresa) {

    var instrucao = `SELECT * FROM relatorioManutecao where fkEmpresa = ${fkEmpresa}`

    return database.executar(instrucao);
}

function gerarRelatorio(descricaoIncidente, descricaoManutencao, dataManutencao, dataRelatorio, fkMaquina, fkFuncionario, fkEmpresa) {

    var instrucao = `insert into relatorioManutencao (
        descricaoIncidente,
        descricaoManutençao,
        dataManutencao,
        dataRelatorio,
        fkMaquina,
        fkFuncionario,
        fkEmpresa) values ('${descricaoIncidente}','${descricaoManutencao}','${dataManutencao}','${dataRelatorio}', ${fkMaquina},'${fkFuncionario}', '${fkEmpresa}')`

    return database.executar(instrucao);
}

module.exports = {
  listarRelatorios,
  gerarRelatorio
};