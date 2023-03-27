function SimOuNao(cErro) {
    return new Promise(function(resolve, reject) {
        if(Math.random() < cErro) {
            reject("Falha na operação")
        } else {
            resolve("Sucesso na Operação")
        }
    })
}
SimOuNao(0.1)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))  //catch = tratamento do erro da promise
    //catch é normalmente utilizado no final, pois apos o catch não se armazena mais nenhum valor



function SimOuNao2(cErro) {
    return new Promise(function(resolve, reject) {
        try {    
            if(Math.random() < cErro) {
                con.log("erro proposital") //por causa desse erro, vai cair no cathc
                reject("Falha na operação")
            } else {
                resolve("Sucesso na Operação")
            }
        } catch(e) {
            reject(e)
        }
    })
}

SimOuNao2(0.4).then(console.log).catch(err => console.log(`Erro: ${err}`))

