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

  return database.executar(instrucao);
}

function listarAlertasDia(tipoMensagem, empresa, data) {
  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.

  var instrucao = `
  SELECT COUNT(st.mensagem) as qntdDia FROM situacaoTotem st JOIN Totem t on st.fkTotem  = t.id  WHERE CONVERT(date,st.datahora) = '${data}' AND t.fkEmpresa =${empresa} and st.mensagem = '${tipoMensagem}' ;
  
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


  return database.executar(instrucao);
}

function porcentagemAlertas(componente, empresa, data) {

  var instrucao = `SELECT 
  Count(*) as totalAlertas,
  (SELECT COUNT(*) FROM situacaoTotem st JOIN Totem t ON st.fkTotem = t.id 
   WHERE CONVERT(DATE, datahora) = '${data}' 
   AND mensagem = 'Ideal' AND t.fkEmpresa = ${empresa} AND st.fkComponente = ${componente}) as totalIdeal,
  (SELECT COUNT(*) FROM situacaoTotem st JOIN Totem t ON st.fkTotem = t.id 
   WHERE CONVERT(DATE, datahora) = '${data}' 
   AND mensagem = 'Atenção' AND t.fkEmpresa = ${empresa} AND st.fkComponente = ${componente}) as totalAtencao,
  (SELECT COUNT(*) FROM situacaoTotem st JOIN Totem t ON st.fkTotem = t.id 
   WHERE CONVERT(DATE, datahora) = '${data}' 
   AND mensagem = 'Urgente' AND t.fkEmpresa = ${empresa} AND st.fkComponente = ${componente}) as totalUrgente,
  (SELECT COUNT(*) FROM situacaoTotem st JOIN Totem t ON st.fkTotem = t.id 
   WHERE CONVERT(DATE, datahora) = '${data}' 
   AND mensagem = 'Critico' AND t.fkEmpresa = ${empresa} AND st.fkComponente = ${componente}) as totalCritico
FROM situacaoTotem st2 join Totem t2 on st2.fkTotem = t2.id 
WHERE CONVERT(DATE, datahora) = '${data}' AND st2.fkComponente = ${componente}`;

  return database.executar(instrucao);
}




module.exports = {
  listarQntdAlertaDiario, listarQntdTotalAlertas, listarAlertasFiltro, listarAlertasDia, porcentagemAlertas
};