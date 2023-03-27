var el2 = document.querySelector("div.destaque"); // obtém o primeiro elemento capturado pelo seletor
var elList = document.querySelectorAll("li.selecionado"); // obtém lista de todos os elementos capturados pelo seletor

var h1 =  document.body.children[0]; //obtem o primeiro item/filho do body
function mudarJS(){
    return h1.textContent = "JS - Aprendizado";
}

var paragrafo = document.getElementById("paragrafo"); //obtem elemento pelo id

function DOM_ON(){ 
    paragrafo.textContent = "Por meio de JavaScript é possível interagir com os elementos da página, utilizado a API conhecida como DOM (Document Object Model). O DOM nada mais é do que uma estrutura de dados que representa todos os elementos da página como objetos que podem ser acessados e modificados via JavaScript. Entre outras tarefas, podemos modificar o conteúdo da página e reagir a eventos.";
}

var dom_off = document.getElementById("DOM_OFF");
dom_off.addEventListener("click", function(){
    paragrafo.textContent = ""
})

/*
Ações addEventListener mais comuns:
focus - Elemento recebe foco.
blur - Elemento perde foco.
input - Valor de um elemento muda (input, select, textarea).
submit - Formulário submetido.
keydown - Tecla do teclado pressionada.
keyup - Tecla do teclado liberada.
click - Botão do mouse pressionado e liberado.
mousemove - Mouse movimentado sobre o elemento
*/


/*
function func1(event) {
  alert("DIV 1");
  event.stopPropagation(); interrompe a propagação do evento
}

event.preventDefault(); Cancela o evento se for cancelável, sem parar a propagação do mesmo.
*/


//ERRO BOTAO OTIMIZADO   NÃO EXCLUI O TEXTO
var dom_otimizado = document.getElementById("dom_otimizado")

function dom_otimizado_ação(){
    paragrafo.textContent = "Por meio de JavaScript é possível interagir com os elementos da página, utilizado a API conhecida como DOM (Document Object Model). O DOM nada mais é do que uma estrutura de dados que representa todos os elementos da página como objetos que podem ser acessados e modificados via JavaScript. Entre outras tarefas, podemos modificar o conteúdo da página e reagir a eventos.";
}
function dom_off_fora(){
    paragrafo.textContent = "";
}

dom_otimizado.addEventListener("click", dom_otimizado_ação);
dom_otimizado.removeEventListener("click", dom_off_fora);

