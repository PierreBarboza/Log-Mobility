// Essa var provavelmente direciona os dados do usuarioController.js para usuarioModel.js:
var usuarioModel = require("../models/usuarioModel");
var sessoes = [];
// Aqui vamos adicionar novas funções (funções essas com os nomes das routes que criamos).
// Dentro das funções vamos adicionar as variaveis, verificações e adcionar as variaveis ao usuarioModel.
function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}
function listarEmpresasCadastradas(req, res) {
    usuarioModel.listarEmpresasCadastradas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function listarlinhas(req, res) {
    var varIdEmpresa = req.params.idEmpresa;
    usuarioModel.listarlinhas(varIdEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function listagemonibustabela(req, res) {
    var rotaEscolhida = req.params.rotaEscolhidaVar;
    usuarioModel.listagemonibustabela(rotaEscolhida)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function gerarResumo(req, res) {
    var onibus = req.body.onibusServer;
    usuarioModel.gerarResumo(onibus)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
                console.log(resultado)
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
//------------
function gerarSensor(req, res) {
    var rotaEscolhida = req.params.rotaEscolhidaVar;
    usuarioModel.gerarSensor(rotaEscolhida)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function entrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo .html:
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var empresa = req.body.empresaServer;
    var tipoUsuario = req.body.tipoUsuarioServer;
    //Verificações das variaveis:
    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        // Aqui encaminhamos ela para o usuarioModel.js:
        usuarioModel.entrar(email, senha, empresa, tipoUsuario)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
                    if (resultado.length == 1) {
                        var empresaGestora = resultado[0].empresaGestora
                        var nomeEmpresa = resultado[0].nomeEmpresa
                        var idEmpresa = resultado[0].idEmpresa
                        res.json({ empresaGestora, nomeEmpresa, idEmpresa });
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function cadastrarfunc(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo .html:
    var emailfunc = req.body.emailfuncServer
    var senhafunc = req.body.senhafuncServer
    var empresafunc = req.body.empresafuncServer
    //Verificações das variaveis:
    if (emailfunc == undefined) {
        res.status(400).send("Sua emailfunc está undefined!");
    } else if (senhafunc == undefined) {
        res.status(400).send("Sua senhafunc está undefined!");
    } else if (empresafunc == undefined) {
        res.status(400).send("Sua empresafunc está undefined!");
    } else {
        // Aqui encaminhamos ela para o usuarioModel.js:
        usuarioModel.cadastrarfunc(emailfunc, senhafunc, empresafunc)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo .html:    
    // Cadastro das empresas feito pela empresa gestora: 
    var nomeEmpresaCadas = req.body.nomeEmpresaCadasServer
    var cnpjEmpresaCadas = req.body.cnpjEmpresaCadasServer
    var ruaEmpresaCadas = req.body.ruaEmpresaCadasServer
    var numeroEmpresaCadas = req.body.numeroEmpresaCadasServer
    var bairroEmpresaCadas = req.body.bairroEmpresaCadasServer
    var cidadeEmpresaCadas = req.body.cidadeEmpresaCadasServer
    var estadoEmpresaCadas = req.body.estadoEmpresaCadasServer
    var cepEmpresaCadas = req.body.cepEmpresaCadasServer
    var tel1EmpresaCadas = req.body.tel1EmpresaCadasServer
    var tel2EmpresaCadas = req.body.tel2EmpresaCadasServer
    // Aqui encaminhamos ela para o usuarioModel.js:
    if (nomeEmpresaCadas == undefined) {
        res.status(400).send("Seu nomeEmpresaCadas está undefined!");
    } else if (cnpjEmpresaCadas == undefined) {
        res.status(400).send("Seu cnpjEmpresaCadas está undefined!");
    } else if (ruaEmpresaCadas == undefined) {
        res.status(400).send("Sua ruaEmpresaCadas está undefined!");
    } else if (numeroEmpresaCadas == undefined) {
        res.status(400).send("Sua numeroEmpresaCadas está undefined!");
    } else if (bairroEmpresaCadas == undefined) {
        res.status(400).send("Sua bairroEmpresaCadas está undefined!");
    } else if (cidadeEmpresaCadas == undefined) {
        res.status(400).send("Sua cidadeEmpresaCadas está undefined!");
    } else if (estadoEmpresaCadas == undefined) {
        res.status(400).send("Sua estadoEmpresaCadas está undefined!");
    } else if (cepEmpresaCadas == undefined) {
        res.status(400).send("Sua cepEmpresaCadas está undefined!");
    } else if (tel1EmpresaCadas == undefined) {
        res.status(400).send("Sua tel1EmpresaCadas está undefined!");
    } else if (tel2EmpresaCadas == undefined) {
        res.status(400).send("Sua tel2EmpresaCadas está undefined!");
    } else {
        // Aqui encaminhamos ela para o usuarioModel.js:
        usuarioModel.cadastrar(
            nomeEmpresaCadas, cnpjEmpresaCadas, ruaEmpresaCadas, numeroEmpresaCadas,
            bairroEmpresaCadas, cidadeEmpresaCadas, estadoEmpresaCadas, cepEmpresaCadas,
            tel1EmpresaCadas, tel2EmpresaCadas
        )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function cadastrolinha(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo .html:
    var nomeLinha = req.body.nomeLinhaServer
    var rota = req.body.rotaServer
    var empresapert = req.body.empresapertServer
    //Verificações das variaveis:
    if (nomeLinha == undefined) {
        res.status(400).send("Sua nomeLinha está undefined!");
    } else if (rota == undefined) {
        res.status(400).send("Sua rota está undefined!");
    } else if (empresapert == undefined) {
        res.status(400).send("Sua empresapert está undefined!");
    } else {
        // Aqui encaminhamos ela para o usuarioModel.js:
        usuarioModel.cadastrolinha(nomeLinha, rota, empresapert)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function cadastrarOnibus(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo .html:
    var numeroOnibus = req.body.numeroOnibusServer
    var placaOnibus = req.body.placaOnibusServer
    var rotaOnibus = req.body.rotaOnibusServer
    //Verificações das variaveis:
    if (numeroOnibus == undefined) {
        res.status(400).send("Sua numeroOnibus está undefined!");
    } else if (placaOnibus == undefined) {
        res.status(400).send("Sua placaOnibus está undefined!");
    } else if (rotaOnibus == undefined) {
        res.status(400).send("Sua rotaOnibus está undefined!");
    } else {
        // Aqui encaminhamos ela para o usuarioModel.js:
        usuarioModel.cadastrarOnibus(numeroOnibus, placaOnibus, rotaOnibus)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function cadastrarSensor(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo .html:
    var onibusAtual = req.body.onibusAtualServer

    //Verificações das variaveis:
    if (onibusAtual == undefined) {
        res.status(400).send("Sua onibusAtual está undefined!");
    } else {
        // Aqui encaminhamos ela para o usuarioModel.js:
        usuarioModel.cadastrarSensor(onibusAtual)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
// Esse é um arquivo que propavelmente encaminha os dados entras as funções.js:
// Aqui dentro temos que adicionar o nome das novas funções que criamos acima:
module.exports = {
    entrar,
    cadastrarfunc,
    cadastrolinha,
    cadastrarOnibus,
    cadastrar,
    listarlinhas,
    listagemonibustabela,
    gerarSensor,
    listarEmpresasCadastradas,
    cadastrarSensor,
    testar,
    gerarResumo
}