// Essa var provavelmente direciona os dados da routes.js para usuarioController.js:
var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");
// Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
// Aqui podemos criar novas ROUTEs para mais a frente criar novas unções:
// OBS: Ao criar novar ROUTEs devemos apanas copiar umas exatamente como estar e mudar o nome que estar dentro das () e após o usuarioController.
//Lista de Empresas cadastradas:
router.get("/listarEmpresasCadastradas", function (req, res) {
    usuarioController.listarEmpresasCadastradas(req, res);
});
router.post("/gerarResumos", function (req, res) {
    usuarioController.gerarResumo(req, res);
});
//Lista de linhas das empresas cadastradas:
router.get("/listarlinhas/:idEmpresa", function (req, res) {
    usuarioController.listarlinhas(req, res);
});
//Lista de onibus cadastrados nas rotas:
router.get("/listagemonibustabela/:rotaEscolhidaVar", function (req, res) {
    usuarioController.listagemonibustabela(req, res);
});
//Gerar o sensor
router.get("/gerarSensor", function (req, res) {
    usuarioController.gerarSensor(req, res);
});
// Cadastrar sensor:
router.post("/cadastrarSensor", function (req, res) {
    usuarioController.cadastrarSensor(req, res);
});
//Cadastro de empresas:
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});
//Cadastro de usuarios:
router.post("/cadastrarfunc", function (req, res) {
    usuarioController.cadastrarfunc(req, res);
});
//Cadastro de linha:
router.post("/cadastrolinha", function (req, res) {
    usuarioController.cadastrolinha(req, res);
});
//Cadastro de onibus:
router.post("/cadastrarOnibus", function (req, res) {
    usuarioController.cadastrarOnibus(req, res);
});
//Autentificar usuario:
router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});
module.exports = router;