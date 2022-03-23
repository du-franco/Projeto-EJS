const express = require('express')
const router = express.Router()

const loginController = require('../controllers/login-controller')

router.get('/entrar', loginController.apresentaTelaLogin)

router.post('/verificarLogin', loginController.verificaLogin)

module.exports = router