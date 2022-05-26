var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
                        sensor.tipoSensor, medida.chave, 
                        medida.momento, 
                        CONVERT(varchar, momento, 108) as momento_grafico
                        from sensor join medida on idsensor = fksensor where fkOnibus = ${idAquario}
                        and sensor.tipoSensor = 'entrada' order by idmedida desc;`;

                        instrucaoSql += `select top ${limite_linhas}
                        sensor.tipoSensor, medida.chave, 
                        medida.momento, 
                        CONVERT(varchar, momento, 108) as momento_grafico
                        from sensor join medida on idsensor = fksensor where fkOnibus = ${idAquario}
                        and sensor.tipoSensor = 'saída' order by idmedida desc`;
    }
    // else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    //     instrucaoSql = `select 
    //     dht11_temperatura as temperatura, 
    //     dht11_umidade as umidade,
    //                     momento,
    //                     DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
    //                     from sensor join medida on idsensor = fksensor where fkOnibus = ${idAquario}
    //                 order by idmedida desc limit ${limite_linhas}`;
    // } 
    else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
                        sensor.tipoSensor, medida.chave, 
                        medida.momento, 
                        CONVERT(varchar, momento, 108) as momento_grafico
                        from sensor join medida on idsensor = fksensor where fkOnibus = ${idAquario}
                        and sensor.tipoSensor = 'entrada' 
                        order by idmedida desc;
                        `;

        instrucaoSql += `select top 1
                        sensor.tipoSensor, medida.chave, 
                        medida.momento, 
                        CONVERT(varchar, momento, 108) as momento_grafico
                        from sensor join medida on idsensor = fksensor where fkOnibus = ${idAquario}
                        and sensor.tipoSensor = 'saída' 
                        order by idmedida desc;
                        `;


    }
    // else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    //     instrucaoSql = `select 
    //                     dht11_temperatura as temperatura, 
    //                     dht11_umidade as umidade,
    //                     DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
    //                     fkSensor 
    //                     from sensor join medida on idsensor = fksensor where fkOnibus = ${idAquario} 
    //                 order by idmedida desc limit 1`;
    // } 
    else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function gerarAlerta( tipoRegistro,onibus) {
    console.log(tipoRegistro)
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ",tipoRegistro,onibus);
    var instrucao = `
        INSERT INTO Central (fkAlerta, fkAlertaOnibus, dtAlerta) VALUES ('${tipoRegistro}', '${onibus}',CURRENT_TIMESTAMP);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    gerarAlerta

}
