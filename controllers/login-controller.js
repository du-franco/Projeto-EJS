const funcionario_db = require('../models/funcionarios-model')

exports.apresentaTelaLogin = (req, res) => {
    res.render('views/pages/login')
}

exports.verificaLogin = (req, res) => {
    const cargo = req.body.cargoFunc
    const email = req.body.emailFunc
    const senha = req.body.senhaFunc

    funcionario_db.findOne({email: email}, (erro, resultado) => {
        if(erro)throw erro
        if(resultado == null){
            res.send("O colaborador não está cadastrado")
        }else if(resultado.senha == senha && resultado.cargo == cargo && cargo == "ADM"){
            global.tipoFunc = 'ADM'
            return res.redirect('/funcionarios/adm')
        }else if(resultado.senha == senha && resultado.cargo == cargo && cargo == "USER"){
            global.tipoFunc = 'USER'
            return res.redirect('/funcionarios/user')
        }else {
            res.send('Acesso Negado')
        }

    })
}