var database = require("../database/config")

function listarTotem(fkEmpresa) {

    var instrucao = `SELECT * FROM Totem WHERE fkEmpresa = ${fkEmpresa}`

    return database.executar(instrucao);
}

function listarAlertasTotem(idMaquina) {
    var instrucao = `SELECT * FROM dbo.medida_Alerta(${idMaquina});`
    return database.executar(instrucao);
}

module.exports = {
    listarTotem,
    listarAlertasTotem
};