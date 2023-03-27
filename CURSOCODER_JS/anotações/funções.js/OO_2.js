//orientação a objetos
//classes
//surgiu com a intenção de organizar o código

/*
EXEMPLO: 

//não utilizando a sintaxe de classes
var pessoa = {
    nome: 'Gabriela',
    sobrenome: 'Ribeiro',
}

//utilizando a sintaxe de classes
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

let gabriela = new Pessoa ('Gabriela', 'Ribeiro')
*/

class Produto {
    constructor(nome, preco, desc = 0.5) { //desc = 0.%, logo 0.15 = 15%
        this.nome = nome
        this.preco = preco  //this dentro da classe é tratado como se fosse uma variavel instanciada
        this.desc = desc
    }

    precoDesc(){                    //função dentro de uma classe chama-se metodo
        return this.preco * (1 - this.desc)
    }

    //get = pegar
    //set = editar, alterar
    
    get nomeProduto(){                  //quando utilizado o get, passa a ser encarado como um atributo
        return `Produto: ${this.nome}` //função dentro de uma classe chama-se metodo
    }

    set mudaNome(valor) {            // set não é retornavel
        return this.nome = valor.toUpperCase()
    }
    

    set precoAument(aumento) {
        this.preco = aumento * (1 + this.desc)
    }
}

const p1 = new Produto("Caneta", 6.99)
console.log(p1.nomeProduto)                   
console.log(p1.preco)        //se nn tivesse o this no constructor, não mostraia o valor desejado
p1.mudaNome = p1.nome                    
console.log(p1)
const p2 = new Produto("Celular", 2599.90)
console.log(p2.preco)
console.log(p2.precoDesc)              //quando incluido o get passa a ser um atributo, entao se tentar executa-lo como uma função dará erro

