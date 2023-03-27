function bomDia() {
    console.log("Bom dia!")
}

const boaTarde = function() {
    console.log("Boa Tarde!")
}

// passar uma função como parametro pra outra função
function executar(fn) {
    if(typeof fn == "function") //typeof: diz o tipo da variavel
    fn()
}

executar(1) // fica fn() == 1(), função invalida
executar(bomDia)
executar(boaTarde)

//retornar uma função a partir de outra função

// sem função dentro função
function potencia(base, expoente) {
    return Math.pow(base, expoente) //calculo
}

const bits8 = potencia(2, 8)
console.log(bits8) //256

// com função dentro função
function potencia2(base) {
    return function(expoente){
        return Math.pow(base, expoente)
    }
}

const potenciaDe2 = potencia2(2)
console.log(potenciaDe2(8)) //256
console.log(potencia2(2)(8)) //256
