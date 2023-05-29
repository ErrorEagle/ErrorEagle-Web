var medidasModel = require("../models/medidasModel");

function capturaMedidaMicro(req, res) {

    var fkTotem = req.params.fkTotem;
    var fkComponente = req.params.fkComponente;

    if (fkTotem == undefined) {
        res.status(400).send("seu totem esta undefined");
    } if (fkComponente == undefined) {
        res.status(400).send("seu componente esta undefined");
    }
    else {

        medidasModel.capturaMedidaMicro(fkTotem, fkComponente)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
                    console.log(resultado);
                    res.json(resultado);

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\Houve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


module.exports = {
    capturaMedidaMicro


};
