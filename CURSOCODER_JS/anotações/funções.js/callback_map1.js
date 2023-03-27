// array.map(fn)     fn = função transformadora
// array.map(callbackfn: (value: x, index: y, array: z[]))
// map retorna a msm quantidade de index

const numeros = [1, 2, 4]

const test = (number, index, array) => number * 2

console.log(numeros.map(test))

const nomes = ["Bia", "Gu", "Vini"]
const primeiraLetra = texto => texto[0]
const pLetra = nomes.map(primeiraLetra)
console.log(nomes, pLetra)
