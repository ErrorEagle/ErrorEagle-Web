var database = require("../database/config")


function capturaMedidaMicro(fkTotem, fkComponente) {
    var instrucao = `SELECT TOP 100 m.percentual, FORMAT(m.dataHora, 'HH:mm:ss') AS hora
    FROM Medida m
    WHERE m.fkComponente = ${fkComponente} AND m.fkTotem = ${fkTotem}
    ORDER BY m.dataHora DESC;`
    console.log(instrucao);
    return database.executar(instrucao);
}


module.exports = {
    capturaMedidaMicro
};