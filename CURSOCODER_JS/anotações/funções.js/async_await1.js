/*
o processamento síncrono é aquele que acontece em sequência e ordenado, seguindo uma fila,
e o outro processamento assíncrono só começa após o atual ser concluído.
*/

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(() => {
//            console.log("exec promise")
            resolve()
        }, tempo)
    })
} 

esperarPor()
    .then(() => console.log("exec promise 1"))
    .then(esperarPor)
    .then(() => console.log("exec promise 2"))
    .then(esperarPor)
    .then(() => console.log("exec promise 3"))
    .then(esperarPor)

function retornarValor() {
    return new Promise(resolve => resolve(100))
}

// com o async a função se torna assincrona, ou seja, só continua quando a execução anterior tiver terminado
async function executar() {    // sem o async/await está função vem antes das demais
    let valor = await retornarValor()
    
    await esperarPor()         // com o await só vai proseguir para a proxima linha, quando o código ja estiver todo executado
    console.log(`Async/Await 1 | ${await retornarValor()}`)

    await esperarPor()
    console.log(`Async/Await 2 | ${valor + 1}`)

    await esperarPor()
    console.log(`Async/Await 3 | ${valor + 2}`)

    return valor + 10   //se na chamada da função, não colocar o then(console.log) não ira mostrar o return
}

executar()