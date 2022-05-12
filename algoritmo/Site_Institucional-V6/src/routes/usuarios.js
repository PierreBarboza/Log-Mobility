// Essa var provavelmente direciona os dados da routes.js para usuarioController.js:
var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");
// Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
// Aqui podemos criar novas ROUTEs para mais a frente criar novas unções:
// OBS: Ao criar novar ROUTEs devemos apanas copiar umas exatamente como estar e mudar o nome que estar dentro das () e após o usuarioController.
router.get("/listarEmpresasCadastradas", function (req, res) {
    usuarioController.listarEmpresasCadastradas(req, res);
});
router.get("/listarlinhas/:idEmpresa", function (req, res) {
    usuarioController.listarlinhas(req, res);
});
router.get("/listarOnibus/:idOnibus", function (req, res) {
    usuarioController.listarOnibus(req, res);
});
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})
router.post("/cadastrarfunc", function (req, res) {
    usuarioController.cadastrarfunc(req, res);
})
router.post("/cadastrolinha", function (req, res) {
    usuarioController.cadastrolinha(req, res);
})
router.post("/cadastrarOnibus", function (req, res) {
    usuarioController.cadastrarOnibus(req, res);
})
router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});
module.exports = router;