const express = require('express')
const router = express.Router()
const {eAdmin} = require('../helpers/eAdmin')

const funcionariosController = require('../controllers/funcionarios-controller')

// router.get('/', (req, res) => {
//     res.send('Estamos na raiz da rota de funcionários')
// })

router.get('/',eAdmin, funcionariosController.listar_funcionariosADM)

router.get('/user', funcionariosController.listar_funcionariosUSER)

router.get('/cadastrar',eAdmin, funcionariosController.cadastrar_funcionario_get)

router.post('/cadastrar',eAdmin, funcionariosController.cadastrar_funcionario_post)

router.get('/deletar/:id', funcionariosController.deletar)

router.get('/editar/:id', funcionariosController.editar)

router.get('/home', funcionariosController.home)

module.exports = router