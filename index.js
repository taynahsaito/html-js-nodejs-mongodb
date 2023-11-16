// acessar funcionalidades do pacote express
const express = require('express')
const cors = require('cors')
const app = express()


//middleware
app.use(express.json())
//admito requisitões vindas de dominios diferentes
app.use(cors())
//objetos json são strings, precisamos transformar m objetos javascript


//aqui, estamos armazenando em memoria volátil
let filmes = [
    {
        titulo: 'Forrest Gump',
        sinopse: "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks), um rapaz com QI abaixo da média e boas intenções."
    },
    {
        titulo: 'Um sonho de Liberdade',
        sinopse: "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela"

    }
]

//acesso a um endpoint
//GET http://localhost:3000/hey
app.get('/hey', (req, res) => {
    res.send('hey')
})

//definir o endpoint:
//metodo get
//padrao de acesso /filmes
//usando o método json (e não send) do objeto res, devolver a base (lembre-se que ela se chama filmes)
app.get('/filmes', (req, res) => {
    res.json(filmes)
})

//definir o endpoint:
//metodo post
//padrao de acesso /filmes
//1. pegar o titulo, sabendo que o objeto req possui uma propriedade chamada body e o titulo é uma propriedade de body
//2. fazer a mesma coisa para sinopse
//3. construir um objeto (coleção de pares chave valor) com titulo e sinopse
//4. add esse objeto a base, lembrando que ela é uma lista javascript
//5. usando o objeto res e seu método json, devolver a base
app.post('/filmes', (req, res) => {
    //syntax sugar
    const titulo = req['body']['titulo']
    const sinopse = req.body.sinopse

    // //operador de desestruturação
    // const {titulo, sinopse} = req.body //isso faz a mesma coisa que as linhas 47 e 48

    const filme = {titulo: titulo, sinopse: sinopse}

    filmes.push(filme)
    res.json(filmes)
})


//1 a 1024 são reservadas pelo sistema operacional (já estão ocupadas)
app.listen(3000, () => console.log('Up and running'))
