/* BOLETIM ESCOLAR
1- realizar a media geral de cada aluno = (n1 + n2 + n3) / 3
2- mostrar no console o relatorio de aluno (nome e nota geral)
*/

const serie1 = [
    {nome: "Maria", 
    nota1: 5.1, 
    nota2: 8, 
    nota3: 7.5},
    {nome: "João", 
    nota1: 8.3, 
    nota2: 7.2, 
    nota3: 9},
    {nome: "João Maria", 
    nota1: 9.7, 
    nota2: 7.7, 
    nota3: 6.4},
]

function mediaGeral(x, y, p) {
    return (x + y + p) / 3
}

function mediaAluno(nomeAluno) {
    serie1.forEach(indice => {  // O método forEach() executa uma dada função em cada elemento de um array.
        
        var nome = indice.nome
        
        let resultado

        function calculoMediaGeral() {
            let n1 = indice.nota1
            let n2 = indice.nota2
            let n3 = indice.nota3
            return mediaGeral(n1,n2, n3)
        }

        if(nome === "Maria" && nome == nomeAluno) {
            resultado = calculoMediaGeral()
            
        } else if(nome === "João" && nome == nomeAluno) {
            resultado = calculoMediaGeral()
            
        } else if(nome === "João Maria" && nome == nomeAluno) {
            resultado = calculoMediaGeral()
            
        } else {
            console.log("Erro")
        }
        
        return console.log(resultado)
        //.toFixed(2)
    })
}

console.log(mediaAluno("Maria"))

/*
alunos 1 serie
const Maria = [
    {
    nota1: 5.1,
    nota2: 8,
    nota3: 7.5
    }
]
const Joao = [
    {
    nota1: 8.3, 
    nota2: 7.2, 
    nota3: 9,
    }
]
const JoaoMaria = [
    {
    nota1: 9.7, 
    nota2: 7.7, 
    nota3: 6.4,
    }
]
*/


// function calculoMG (nomeAluno => {

//     if (nomeAluno === "Maria") {
//         const n1 = Maria.map(r => r.nota1)
//         const n2 = Maria.map(r => r.nota2)
//         const n3 = Maria.map(r => r.nota3)
        
//         console.log(mediaGeral(n1, n2, n3))
        
//     }
// })

