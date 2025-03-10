//buscar elementos na página HTML
var meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(meuElemento.textContent);

var paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);

//console.log(paragrafo1[0].textContent);

for(let i=0; i<paragrafo1.length;i++){
    console.log(paragrafo1[i].textContent);
}

var paragrafo2 = document.getElementsByTagName("p");
for(let i=0; i<paragrafo2.length;i++){
    console.log(paragrafo2[i].textContent);
}

var cabecalho1 = document.querySelector(".cabecalho");
console.log(cabecalho1.textContent);

var cabecalho2 = document.querySelectorAll(".cabecalho");
console.log(cabecalho2);

for(let i=0; i<cabecalho2.length;i++){
    console.log(cabecalho2[i].textContent);
}

// acesso ao conteúdo dos elementos HTML
document.getElementById("paragrafo1").textContent = "Texto alterado";
document.getElementById("paragrafo2").innerHTML = "<h3>Texto alterado!</h3>";

//eventos
var botao1 = document.getElementById("botao1");
botao1.onclick = function(){
    botao1.textContent = "Clicado";
    botao1.style.backgroundColor = "green";
    alert("Clicou!");
}

var botao2 = document.getElementById("botao2");
var paragrafo3 = document.getElementById("paragrafo3");
botao2.onclick = function(){
    paragrafo3.textContent = "Texto alterado";
}

var botao3 = document.getElementById("botao3");

botao3.addEventListener("mouseover", function(){
    botao3.style.backgroundColor = "#ff33bb";
});

botao3.addEventListener("mouseout", function(){
    botao3.style.backgroundColor = "";
});
