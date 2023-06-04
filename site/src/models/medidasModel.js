var database = require("../database/config")


function capturaMedidaMicro(fkTotem, fkComponente) {
    if (fkComponente != 3) {
        var instrucao = `SELECT TOP 20 m.percentual, FORMAT(m.dataHora, 'HH:mm:ss') AS hora
    FROM Medida m
    WHERE m.fkComponente = ${fkComponente} AND m.fkTotem = ${fkTotem}
    ORDER BY m.dataHora DESC;`
        console.log(instrucao);
        return database.executar(instrucao);
    } else {
        var instrucao = `SELECT TOP 1 m.percentual, FORMAT(m.dataHora, 'HH:mm:ss') AS hora
    FROM Medida m
    WHERE m.fkComponente = ${fkComponente} AND m.fkTotem = ${fkTotem}
    ORDER BY m.dataHora DESC;`
        console.log(instrucao);
        return database.executar(instrucao);
    }
}


module.exports = {
    capturaMedidaMicro
};