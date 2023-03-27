/*
Function that operate on other functions, either by taking as arguments or by
returning them, are called higher-order funcition
BASICAMENTE, funções que se utilizam para funcionarem
*/

function run(fn) {
    return `Result random: ${fn}()`
}

function sayHello(){
    console.log("Hello!!!")
}

run(sayHello)
let result = run(Math.random)
console.log(result)


// curring (Tecnica) - enchutar códigos
function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}

const nycFinalPrice = finalPrice(0.0875)

console.log(nycFinalPrice(25.1))
console.log(finalPrice(0.0875)(25.1))
