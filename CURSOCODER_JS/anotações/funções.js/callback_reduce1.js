// array.reduce(fn, i)  fn: função, i: dado inicial(não obrigatorio)
// Array.reduce(callbackfn: (previousValue: , currentValue: , currentIndex: , array: x[])

/* 
    execução: acumulador + elemento
    array = [3, 2, 1]
    (primeiroValor: dado inicial, segundoValor: elemento do index)
    (0, 3) -> 0 + 3  //= 3
    (3, 2) -> 3 + 2  //= 5
    (0, 3) -> 5 + 1  //= 6 

    transformou array em number

    quando dado inicial não for passado, quem assume a função de primeiro valor é o index[0]
*/

const carrinho = [
    {nome: "Caneta", qtde: 10, preco: 7.99},
    {nome: "Impressora", qtde: 0, preco: 649.50},
    {nome: "Caderno", qtde: 4, preco: 27.10}
]

const getTotal = el => el.qtde * el.preco
const somar = (acc, el) => acc + el

console.log("Total Carrinho: R$", carrinho.map(getTotal).reduce(somar))

