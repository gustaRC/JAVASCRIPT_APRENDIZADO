//encapsular com a promise a leitura de dados

const fs = require("fs")
const path = require("path")

function readAr(caminho) { 
    return new Promise(function(resolve) {
        fs.readFile(caminho, function(err, conteudo) {resolve(conteudo.toString())} )
    })
}

const dadosCallbackPath = path.join(__dirname, "dadosCallback.txt")

readAr(dadosCallbackPath)
    .then(conteudo => conteudo.split("\n"))       //separa o arquivo por quebras de linha em q cada linha se transforma em um index
    //.then(linhas => console.log(linhas[1]))    //mostrar somente o index 1 = linha 2
    .then(linhas => linhas.join(", "))
    .then(conteudo => console.log(`O resultado final será: ${conteudo}`))
