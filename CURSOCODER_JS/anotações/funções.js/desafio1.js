//somar(3)(4)(5) OK
function soma1(a) {
    return function(b) {
        return (c) => {
            return a + b + c
        }
    }
}

let somar =  soma1(3)(4)
console.log("Somar: " + somar(20))



//fn = + -> 3 + 7
//fn = - -> 3 - 7
//calcular(3)(7)(fn)
function calculo(a){
    return function(b) {
        return fn => {
            if (fn == "+") {
                return a + b
            } else if (fn == "-") {
                return a - b
            } else if (fn == "*") {
                return a * b
            } else if (fn == "/"){
                return a / b
            } else {
                return "erro"
            }
        }
    }
}

let calcular = calculo(3)(7)
console.log("Calculo: " + calcular("-"))

// outro metodo

function calculo2(a){
    return function(b) {
        return fn => {
            return fn(a, b)
        }
    }
}

function subtração(a, b) {
    return a - b
}
function multiplicação(a, b) {
    return a * b
}
function soma(a, b) {
    return a - b
}
function divisão(a, b) {
    return a - b
}

let calcular2 = calculo2(10)(5)
console.log("Calculo2: " + calcular2(soma))

