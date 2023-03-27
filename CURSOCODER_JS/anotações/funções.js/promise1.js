// promise = promessa; promessa deq algo vai acontecer
// promice(function(function))
// para chamar a promice utlizasse: variavel.then(function)

// bom utilizar quando precisa de uma operação assincrona

let p = new Promise(function(cumprirPromise) { // é preciso instanciar a promise com: new
    cumprirPromise(["Bia", "Vini", "Gu"])  // promise gera somente um único valor/parametro
})                      // para passar mais de um valor tem q criar um objeto / pode-se criar um array tb

console.log(p)

function pItem(array) {
    return array[0]
}

const pLetra = string => string[0]

const primeiroElemento = pItemOuLetra => pItemOuLetra[0]

p   // pode ser contatenado
    .then(primeiroElemento) 
    .then(primeiroElemento)
    .then(console.log)  //console.log é uma função e como then recebe somente um parametro, dá certo chamar somente a função console sem especificar
