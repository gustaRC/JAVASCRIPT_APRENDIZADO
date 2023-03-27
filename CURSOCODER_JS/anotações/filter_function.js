// nome é auto explicativo
const num = [1, 2, 3, 4, 5]

const maiorQZero = pa => pa > 0
const par = function(pa){
    return pa % 2 === 0
}
console.log(num.filter(maiorQZero))
console.log(num.filter(par))


const estudantes = [
    {Nome: "Finn", notaGeral: 9.3},
    {Nome: "Jake", notaGeral: 8.8},
    {Nome: "ReiGelado", notaGeral: 6.3},
]

const melhorEstudante = n => n.notaGeral >= 9
const piorEstudante = function(n) { 
    n.notaGeral <= 7
}

console.log(estudantes.filter(melhorEstudante))
console.log(estudantes.filter(piorEstudante))

