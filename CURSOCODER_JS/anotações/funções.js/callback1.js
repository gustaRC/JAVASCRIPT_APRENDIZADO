// Uma função callback é uma função passada a outra função como argumento

function exec(função, a, b) {
    return função(a, b)
}

somarValor = (x, y) => console.log(x + y)

exec(somarValor, 30, 20)


function fn() {
    return console.log("setInterval não para")
}
// primeiro valor: função. segundo valor: milisegundos q a função vai se repetir
setInterval(fn, 1000)

setInterval(function() {
    return console.log("setInterval não para 2")
}, 5000)