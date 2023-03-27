function gerarNumeroEntre(min, max) {
    if (min > max) [max, min] = [min, max]  // if sem o {}

    return new Promise(function(resolve){  // A função parseInt() analisa um argumento string e retorna um inteiro na base especificada        
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        resolve(aleatorio)    
    })
}

console.log(gerarNumeroEntre(1, 10))


