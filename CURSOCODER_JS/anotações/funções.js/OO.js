//orientação a objetos
/*
Um objeto é uma coleção de dados e/ou funcionalidades relacionadas 
(que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos). 
*/

// Função Construtora
function Produto(nome, preco, desc = 0.50) { //desc = 0.%, logo 0.15 = 15%
    this.nome = nome  //criou os parametros, porém para instacia-los utilizasse o codigo this
    this.preco = preco //quando utilizado o this a variavel fica disponivel para tds
    this.desc = desc

    this.precoDesc = function(){
        return this.preco * (1 - this.desc) //formula para desconto
    }
}

const p1 = new Produto("Caneta", 6.99)
console.log(p1.nome) //se nn tivesse o this, não mostraia o valor desejado
const p2 = new Produto("Celular", 2599.90)
console.log(p2.preco)
console.log(p2.precoDesc())

