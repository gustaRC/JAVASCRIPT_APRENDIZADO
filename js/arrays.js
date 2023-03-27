var lista = ['item1', "item2", 'item3'];

console.log("quantidade lista: " + lista.length); //exibe a quantidade de itens na lista

var listaAdd_final = lista.push('item4', "item5"); //adicionar item final
console.log("lista apos add final: " +lista)

var listaRemover_final = lista.pop(); //remover item final
console.log("lista apos remover final: "+ lista)

listaAdd_inicio = lista.unshift('item6'); //adicionar item inicio
console.log("lista apos add inicio: " +lista)

var listaRemover_inicio = lista.shift(); //remover item inicio
console.log("lista apos remover inicio: "+ lista)

//acessar item da lista
var primeiroItem = lista[0]; 
var segundoItem = lista[1];

//Procurar o índice de um item na Array
var indice_item3 = lista.indexOf("item3")
console.log("indice item3: "+ indice_item3)

//Remover um item pela posição do índice
var removerIndice = lista.splice(1,1) //splice(inicio, index a ser removido)
console.log("remover pelo indice: "+ removerIndice)

//copiar um array
lista.slice()
console.log("lista copiar: " +lista);

//Accessando elementos de um array
console.log("acessar index: " +lista[0])
