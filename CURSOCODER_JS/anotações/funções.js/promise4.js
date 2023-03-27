function MinMaxTemp(min, max, tempo = 2000) {
    if (min >= max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(function(){
            resolve(parseInt(Math.random() * (max - min + 1) + min))
        }, tempo)
    })
}

function gerarMTSnumeros() {
    return Promise.all([    //somente quando tiver a resposta de tds os parametros listado q será cumprida a promise
        MinMaxTemp(1, 50, 2000),
        MinMaxTemp(1, 50, 500),
        MinMaxTemp(1, 50, 3500),
        MinMaxTemp(1, 50, 1000),
        MinMaxTemp(1, 50, 1500)
    ])
}

gerarMTSnumeros().then(numeros => console.log(numeros))
