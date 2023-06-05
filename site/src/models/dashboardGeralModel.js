var database = require("../database/config")

function listarQntdAlertaDiario(empresa, data) {
  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.

  var instrucao = `
    SELECT COUNT(st.mensagem) as qtdAlertaDia
    FROM situacaoTotem st
    JOIN Totem t ON st.fkTotem = t.id
    WHERE st.mensagem <> 'Ideal' AND st.mensagem <> 'Conexão com a internet ok'
      AND CONVERT(date, st.datahora) = '${data}'
      AND t.fkEmpresa = ${empresa};
    `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarQntdTotalAlertas(empresa, data) {
  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.

  var instrucao = `
    SELECT COUNT(st.mensagem) as qtdAlertaDia
    FROM situacaoTotem st
    JOIN Totem t ON st.fkTotem = t.id
    WHERE CONVERT(date, st.datahora) = '${data}'
      AND t.fkEmpresa = ${empresa};
    `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarAlertasFiltro(tipoMensagem, tipoComponente, empresa, data) {
  var instrucao;

  if (tipoComponente == 0) {
    instrucao = `SELECT DISTINCT st.fkTotem, t.hostName, st.mensagem, c.nome 
      FROM situacaoTotem st
      JOIN Totem t ON st.fkTotem = t.id
      JOIN Componente c ON st.fkComponente = c.id  
      WHERE st.mensagem <> 'Ideal' AND st.mensagem <> 'Conexão com a internet ok'
        AND CONVERT(date, st.datahora) = '${data}'
        AND t.fkEmpresa = ${empresa};`;
  } else if (tipoMensagem == 0) {
    instrucao = `SELECT DISTINCT st.fkTotem, t.hostName, st.mensagem, c.nome 
      FROM situacaoTotem st
      JOIN Totem t ON st.fkTotem = t.id
      JOIN Componente c ON st.fkComponente = c.id  
      WHERE st.mensagem <> 'Ideal' AND st.mensagem <> 'Conexão com a internet ok'
        AND CONVERT(date, st.datahora) = '${data}'
        AND t.fkEmpresa = ${empresa}
        AND c.nome = '${tipoComponente}';`;
  } else {
    instrucao = `SELECT DISTINCT st.fkTotem, t.hostName, st.mensagem, c.nome 
      FROM situacaoTotem st
      JOIN Totem t ON st.fkTotem = t.id
      JOIN Componente c ON st.fkComponente = c.id  
      WHERE st.mensagem <> 'Ideal' AND st.mensagem <> 'Conexão com a internet ok'
        AND CONVERT(date, st.datahora) = '${data}'
        AND t.fkEmpresa = ${empresa}
        AND st.mensagem = '${tipoMensagem}'
        AND c.nome = '${tipoComponente}';`;
  }

  console.log(instrucao);
  return database.executar(instrucao);
}



module.exports = {
  listarQntdAlertaDiario, listarQntdTotalAlertas, listarAlertasFiltro
};