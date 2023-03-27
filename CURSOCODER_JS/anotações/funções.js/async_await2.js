//GERADOR DE NUMEROS SEM REPETIÇÃO

//NUMEROS TELECENA
function gerarNumeroEntre(min, max, numProib) { //numProib é para numeros repetidos
    if (min > max) [max, min] = [min, max]
    return new Promise(function(resolve, reject){
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min) //parseInt = transformar string em nº inteiro / Math.random() gerá nº entre 0 e 1, a equação transforma nos nº desejados
        if(numProib.includes(aleatorio)) { //se em "numProib" tiver algum numero de "aleatorio" ocorrerá tal ação
            reject("Numero repetido")
        } else {
            resolve(aleatorio)    
        }
    })
} 

async function nTeleCena(numSorteios) {
    try{
        const numeros = []
        for(let i = 0; i < numSorteios; i++)  {
            numeros.push(await gerarNumeroEntre(1, 500, numeros))
        }
        return numeros
    } catch {
        return nTeleCena(numSorteios)
    }
}
//try e catch serve para quando a função gerar algum nº repetido ele vai repetir a função até q a função funcione como o programado
nTeleCena(50).then(console.log).catch(console.log)
