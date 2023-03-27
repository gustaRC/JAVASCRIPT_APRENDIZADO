const carrinho = [
    {nome: "Caneta", qtde: 10, preco: 7.99},
    {nome: "Impressora", qtde: 0, preco: 649.50},
    {nome: "Caderno", qtde: 4, preco: 27.10}
]

//criando filter
Array.prototype.MeuFilter = function(fn) {   //prototype: criação de metodos
    const novoArray = []
    for(let i = 0; i < this.length; i++) {   // this = array
        if((fn(this[i], i, this))){          //primeiroValor: valor, segundoValor: index(indice), terceiroValor: array[]
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const maiorQZero = el => el.qtde > 0  //el.ITEM do array

console.log(carrinho.MeuFilter(maiorQZero))