const funcionario_db = require('../models/funcionarios-model')

exports.listar_funcionariosADM = (req,res)=>{
    funcionario_db.find({}, (erro, resultado)=>{
        if(erro)throw erro
        res.render('views/pages/listagemFuncionariosADM', {resultado})
        
    })
}

exports.listar_funcionariosUSER = (req,res)=>{
    funcionario_db.find({}, (erro, resultado)=>{
        if(erro)throw erro
        res.render('views/pages/listagemFuncionariosUSER', {resultado})
        
    })
}

exports.cadastrar_funcionario_get = (req, res) => {
    const resultado = []
    res.render('views/pages/cadastroFuncionario', {resultado})
}

exports.cadastrar_funcionario_post = (req, res) => {
    
    if(req.body.idFunc == ''){
    
    const salva_funcionario = new funcionario_db()

    salva_funcionario.nome = req.body.nomeFunc
    salva_funcionario.cargo = req.body.cargoFunc
    salva_funcionario.email = req.body.emailFunc
    salva_funcionario.senha = req.body.senhaFunc

    salva_funcionario.save((erro) => {
        if(erro)throw erro
        return res.redirect('/funcionarios')
    })
  }else{
      const id = req.body.idFunc
      funcionario_db.findById(id, (erro, resultado) => {
          if(erro)throw erro
          resultado.nome = req.body.nomeFunc
          resultado.cargo = req.body.cargoFunc
          resultado.email = req.body.emailFunc
          resultado.senha = req.body.senhaFunc

          resultado.save((erro) => {
              if(erro)throw erro
              return res.redirect('/funcionarios')
          })
      })
  }
}

exports.deletar = (req, res) => {
    const id = req.params.id
    funcionario_db.deleteOne({_id: id}, (erro, resultado) => {
        if(erro)throw erro
        return res.redirect('/funcionarios')
    })
}

exports.editar = (req, res) => {
    const id = req.params.id
    funcionario_db.findById(id, (erro, resultado) => {
       if(erro)throw erro
       return res.render('views/pages/cadastroFuncionario', {resultado}) 
    })
}

exports.home = (req, res) => {
    res.render('views/pages/home')
}

