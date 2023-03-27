const estudantes = [
    {Nome: "Finn", notaGeral: 9.3},
    {Nome: "Jake", notaGeral: 8.8},
    {Nome: "ReiGelado", notaGeral: 6.3},
]

const melhorEstudante = estudante => estudante.notaGeral >= 9
const pegarNota = el => el.notaGeral
const avg = (acc, el, i, array) => {
    if (i === array.lenght - 1) {
        return (acc + el) / array.lenght
    } else {
        return acc + el
    }
}

console.log(
    estudantes
        .filter(melhorEstudante)
        .map(pegarNota)
        .reduce(avg)
)
