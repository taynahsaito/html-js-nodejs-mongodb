const protocolo = 'http://'
const baseURL = 'localhost:3000'
const filmesEndPoint = '/filmes'

async function obterFilmes(){
    // o que aparece aqui, vai aparecer no console do google
    const URLcompleta = `${protocolo}${baseURL}${filmesEndPoint}`

    const filmes = (await axios.get(URLcompleta)).data
    console.log(filmes)
}