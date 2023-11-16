const protocolo = 'http://'
const baseURL = 'localhost:3000'
const filmesEndPoint = '/filmes'

async function obterFilmes(){
    // o que aparece aqui, vai aparecer no console do google
    const URLcompleta = `${protocolo}${baseURL}${filmesEndPoint}`

    const filmes = (await axios.get(URLcompleta)).data
    
    //encontrar a tabela na arvore DOM
    let tabela = document.querySelector('.filmes') //buscando alguém que tem a classe filmes (que no caso seria o table)
    let corpoDaTabela = tabela.getElementsByTagName('tbody')[0]
    for (let filme of filmes){
        let linha = corpoDaTabela.insertRow(0) //insertRow(0) para adicionar sempre na primeira linha, se quiser adicionar na última, chame insertRow sem argumentos
        let celulaTitulo = linha.insertCell(0)
        let celulaSinopse = linha.insertCell(1)
        celulaTitulo.innerHTML = filme.titulo
        celulaSinopse.innerHTML = filme.sinopse
    }
}