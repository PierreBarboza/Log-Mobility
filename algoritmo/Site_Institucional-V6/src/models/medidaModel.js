var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = '' 

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
                        sensor.tipoSensor, medida.chave, 
                        medida.momento, 
                        CONVERT(varchar, momento, 108) as momento_grafico
                        from sensor join medida on idsensor = fksensor where fkOnibus = ${idAquario}
                        and sensor.tipoSensor ='entrada' order by idmedida desc`;
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
        instrucaoSql = `select top 7
                        sensor.tipoSensor, medida.chave, 
                        medida.momento, 
                        CONVERT(varchar, momento, 108) as momento_grafico
                        from sensor join medida on idsensor = fksensor where fkOnibus = ${idAquario}
                        and sensor.tipoSensor = 'entrada' 
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


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
