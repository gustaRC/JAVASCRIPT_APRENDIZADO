/*
A progamming language is said to have First-class functions when functions in that language are
treated like any other variable
BASICAMENTE, atriubuir uma função a uma variavel, tratar a função como "primeira classe"
*/

let soma = function somar(a, b) {
    return a + b;
}

let menos = function(a, b) {
    return a - b;
}

let mult = (a, b) => {
    return a * b;
}

let divi = (a, b) => a / b;


console.log(soma(5, 10))

console.log(menos(5, 10))

console.log(mult(5, 10))

console.log(divi(5, 10))
