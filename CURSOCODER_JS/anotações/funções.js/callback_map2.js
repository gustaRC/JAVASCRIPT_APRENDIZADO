const carrinho = [
    {nome: "Caneta", qtde: 10, preco: 7.99},
    {nome: "Impressora", qtde: 0, preco: 649.50},
    {nome: "Caderno", qtde: 4, preco: 27.10}
]

function getNome(item) {
    return item.nome       //item.ELEMENTO do array
}
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco   
const total = carrinho.map(getTotal)
console.log(total)

//criando map
console.log("laço for:")
Array.prototype.MeuMap = function(fn) {   //prototype: criação de metodos
    const novoArray = []
    for(let i = 0; i < this.length; i++) {    // this = array
        novoArray.push(fn(this[i], index, this)) 
    }
    return novoArray
}
console.log(carrinho.MeuMap(getNome))