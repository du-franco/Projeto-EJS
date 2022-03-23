const express = require('express')
const mongoose = require('mongoose')
const porta = 3000
const funcionarios_router = require('./routers/funcionarios-routers')

const login_router = require('./routers/login-routers')


mongoose.connect('mongodb+srv://edufranco:eed240818@cluster0.abs0g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Estamos conectados ao Banco de Dados")
})

const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname, '/views')
app.use(express.urlencoded({extended:true}))

app.use('/funcionarios', funcionarios_router)

app.use('/login',login_router)

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('Página Inicial')
})

app.listen(porta, () => {
    console.log('Servidor Rodando')
})

global.tipoFunc = 'USER'