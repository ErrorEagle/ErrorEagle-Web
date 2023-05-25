var database = require("../database/config")

function listarRelatorios(fkEmpresa) {

    var instrucao = `SELECT * FROM relatorioManutencao where fkEmpresa = ${fkEmpresa}`

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

function listarRelatorio(idRelatorio) {

    var instrucao = `SELECT  
    t.hostName,
    f.nome,
    r.descricaoIncidente,
    r.descricaoManutencao,
    FORMAT(dataManutencao, 'dd/MM/yyyy HH:mm:ss') as data_manutencao,
    FORMAT(dataRelatorio, 'dd/MM/yyyy HH:mm:ss') as data_relatorio,
    r.fkEmpresa
FROM relatorioManutencao AS r 
JOIN [dbo].[Funcionario] AS f on r.fkFuncionario =f.id 
JOIN [dbo].[Totem] as t on r.fkMaquina = t.id where r.id = ${idRelatorio}`

    return database.executar(instrucao);
}

module.exports = {
    listarRelatorios,
    gerarRelatorio,
    listarRelatorio
};