module.exports = {
    eAdmin: function(req, res, next){
        if(global.tipoFunc == "ADM"){
            return next()
        }else{
            res.send("Você deve ser um administrador para acessar essa rota")
        }
    }
}