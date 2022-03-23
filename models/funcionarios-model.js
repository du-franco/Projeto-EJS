const mongoose = require('mongoose')

const Funcionarios = mongoose.model('funcionarios', {
    nome: String,
    cargo: String,
    email: String,
    senha: String
})

module.exports = Funcionarios 