//  array.filter(fn)   fn = função condicional boleana
// array.filter(callbackfn: (value: x, index: y, array: z[]))

const carrinho = [
    {nome: "Caneta", qtde: 10, preco: 7.99},
    {nome: "Impressora", qtde: 0, preco: 649.50},
    {nome: "Caderno", qtde: 4, preco: 27.10}
]

function qtdeMaiorZero(item) {return item.qtde > 0}

console.log("Filter(Maior que zero): ", carrinho.filter(qtdeMaiorZero))


const getNome = el => el.nome

console.log("Filter(Maior que zero) + Map(Nome): ", carrinho.filter(qtdeMaiorZero).map(getNome))

