const carrinho = [
    {nome: "Caneta", qtde: 10, preco: 7.99, fragil: true},
    {nome: "Impressora", qtde: 0, preco: 649.50, fragil: true},
    {nome: "Caderno", qtde: 4, preco: 27.10, fragil: false}
]

// 1# somente fragil: true
const sFragil = el => el.fragil == true    //o item ja retorna o valor true, logo poderia colocar somente: el.fragil q ja retornaria os valores q são true
console.log("Somente Frageis: ", carrinho.filter(sFragil))

// 2# qtde * preço = total
function total(el) {
    return el.qtde * el.preco
}
console.log("Qtde * Preço: ", carrinho.map(total))

// 3# media totais
function mediaTotal(acc, el) {
    return (acc + el) / carrinho.length
}
console.log("Media Total: ", carrinho.map(total).reduce(mediaTotal))