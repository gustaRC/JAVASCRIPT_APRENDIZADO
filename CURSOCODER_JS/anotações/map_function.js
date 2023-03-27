const numbers = [1, 2, 3, 4]
const numbersV2 = numbers.map(function(elemento) {
    return elemento * 2
})

const numbersV3 = [] //sem o map
for(let n of numbers) {
    numbersV3.push(n * 3)
}

console.log(numbers, numbersV2, numbersV3)

const estudantes = [
    {nome: "Joao", pontos: 6.4},
    {nome: "Maria", pontos: 8.6},
    {nome: "Joao Maria", pontos: 9.4},
    {nome: "Maria Joao", pontos: 5.1},
]

let pegarPontos = estudantes.map(function(parametro) {
    return parametro.pontos
})
console.log(pegarPontos)

const getPontos = elementos => elementos.pontos
console.log(
    estudantes.map(getPontos).map(Math.ceil)
    /*
    Arredondar pra cima: Math.ceil
    Arredondar pra baixo: Math.floor
    */
)
