// bibliotecas do node.js
const fs = require('fs')
const path = require('path')

// utilizasse join para colocar o diretorio em que funcione em sistemas operacionais diferentes
// __dirname refere-se ao diretorio em que o arquivo aberto está localizado
const caminho = path.join(__dirname, "dadosCallback.txt")

// leitura de arquivos
function exibirConteudoArquivo(err, conteudo) {
    // toString para mostrar o conteudo escrito, se nn retornara um buffer
    console.log(conteudo.toString())
}

console.log("Inicio...")
// primeiro valor: caminho do arquivo, segundo valor: opções, terceiro valor: callback (erro, data onde será armazenado os dados)
fs.readFile(caminho, {}, exibirConteudoArquivo) // é um processo assincrono, somente executado quando chamado, não segue a ordem das linhas
console.log("Fim...")

//se nn quiser chamar o callback
console.log("Inicio Sync...")
const cont = fs.readFileSync(caminho) //sincrono, segue a ordem do codigo
console.log(cont.toString())
console.log("Fim Sync...")
