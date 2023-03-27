// com callback
/*
setTimeout(function() {  //setTimeout executa o codigo dps de algum tempo e encerra, o setInterval executa a cada determidado tempo o codigo
    console.log("exec callback")

    setTimeout(function(){
        console.log("exec callback")

        setTimeout(() => console.log("exec callback"), 4000)
    }, 3000)

}, 2000)
*/

// com promise
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(() => {
            console.log("exec promise")
            resolve()
        }, tempo)
    })
} 
esperarPor()
            .then(() => esperarPor())
            .then(esperarPor)
