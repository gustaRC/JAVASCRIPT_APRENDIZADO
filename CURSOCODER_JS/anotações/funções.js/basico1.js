// Function Declaration
function bomDia () {
    console.log("Bom dia!")
}

bomDia()

// Function Expression
const boaTarde = function() {
    console.log("Boa Tarde!")
}

boaTarde()

function soma(a, b = 0) { //assim n tem obrigação de colocar valor para b
    return a + b
}

console.log(soma(1)) // 1