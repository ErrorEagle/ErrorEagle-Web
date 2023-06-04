var database = require("../database/config")

function listarRelatorios(fkEmpresa) {

    var instrucao = `SELECT rm.titulo, rm.id, rm.dataRelatorio, e.razaoSocial
    FROM RelatoriosManutencao rm 
    JOIN Funcionario f ON rm.fkFuncionario = f.id 
    JOIN Empresa e on e.id = f.fkEmpresa
    WHERE f.fkEmpresa = ${fkEmpresa}`

    return database.executar(instrucao);
}

function gerarRelatorio(fkFuncionario, fkTotem, titulo, descricaoIncidente, descricaoManutencao, dataManutencao, dataRelatorio) {

    var instrucao = `insert into RelatoriosManutencao (
        fkFuncionario,
        fkTotem,
        titulo,
        descricaoIncidente,
        descricaoManutencao,
        dataManutencao,
        dataRelatorio
        ) values ('${fkFuncionario}','${fkTotem}','${titulo}','${descricaoIncidente}','${descricaoManutencao}', ${dataManutencao},'${dataRelatorio}')`

    return database.executar(instrucao);
}

function listarRelatorio(idRelatorio) {

    var instrucao = `SELECT  
    t.hostName,
    f.nome,
    r.id,
    r.titulo,
    r.descricaoIncidente,
    r.descricaoManutencao,
    FORMAT(dataManutencao, 'dd/MM/yyyy HH:mm:ss') as data_manutencao,
    FORMAT(dataRelatorio, 'dd/MM/yyyy HH:mm:ss') as data_relatorio
    FROM RelatoriosManutencao AS r 
    JOIN [dbo].[Funcionario] AS f on r.fkFuncionario =f.id 
    JOIN [dbo].[Totem] as t on r.fkTotem = t.id where r.id = ${idRelatorio}`

    return database.executar(instrucao);
}

module.exports = {
    listarRelatorios,
    gerarRelatorio,
    listarRelatorio
};