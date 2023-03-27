var escopoGlobal = "Olá"
function digaOla() {
    let escopoLocal = "Fulano"
    return console.log(escopoGlobal + " " +escopoLocal)
}
digaOla() //chamar função

// oq está entre parenteses é o PARAMETRO
function soma(a, b) {
    return a + b;
}
console.log(soma(1, 1)) // = 2

function sayHello(name){
    console.log(`Hello ${name}`)
}
sayHello("Sicrano") //imprime: Hello Sicrano

// função anonima
var subtração = function(a, b){ 
    return a - b;
}
console.log(subtração(1, 1)) // = 0

/* 
(function (a, b, c){
    console.log(`Resultado: ${a + b + c}`)
})(1, 2, 3); //parametros sem chamar variavel função anonima

(() => {
    console.log("arrow1")
})();

(() => console.log("arrow2"))();
*/

//arrow function
var digaOla_arrowFunction = (name) => {
    var escopoLocal = "Fulano"
    return name + " " +escopoLocal
}
console.log(digaOla_arrowFunction("gu"))// imprime: gu Fulano

var incremento1 = (x) => {
    return x + 1
}
console.log(incremento1(1))// = 2

var incremento2 = (x) => x + 1
console.log(incremento2(99))// = 100

function Numeros1(nums) {
    for(let n of nums){
        console.log(n)
    }
}
Numeros1([91,92,93])

// spread/rest
function Numeros2(...nums) {
    for(let n of nums){
        console.log(n)
    }
}
Numeros2(101,102,103)

function somaValores(...numeros) {
    let total = 0
    for (let n of numeros){
        total += n
    }
    return total
}

console.log("Resultado: " + somaValores(1, 1, 1))