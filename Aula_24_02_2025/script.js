console.log("Olá mundo!");

//variáveis

//var
var animal = "gato";
console.log(animal);

var numero = 10;
console.log(numero);

//verificar o tipo
console.log(typeof animal);
console.log(typeof numero);

//let
let nome = "Fulano";

//const
const valor = 10;

//valor = 20; //não permite reatribuição porque é uma constante


//o sinal de "=" uma atribuição
animal = "peixe";

//template literal
console.log(`O animal é ${animal} e tem ${numero} meses de vida!`);

//comparação
//igualdade
console.log(5 == "5");  //ignora o tipo na sua comparação

//estritamente igual
console.log(5 === "5"); //inclui o tipo na sua comparação

//desigualdade
console.log(5 != "5");

//estritamente desigual
console.log(5 !== "5");

//operadores de comparação 
// > >= < <=

//entrada de dados do usuário
var nomeCompleto = window.prompt("Digite o nome: ");
console.log(nomeCompleto);




