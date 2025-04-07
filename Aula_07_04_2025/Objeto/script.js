//criar o objeto
const pessoa = {
    nome: "Fulano",
    idade: 12
};

console.log(pessoa);

let pessoa2 = {};

pessoa2.nome = "Maria";
pessoa2.idade = 20;
pessoa2.signo = "peixes";

console.log(pessoa2);

const carro = new Object();
carro.marca = "toyota";
carro.ano = 2025;

//p1, p2, p3...pn (Instâncias do tipo Pessoa)
//função construtora
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

let p1 = new Pessoa("João", 21);
let p2 = new Pessoa("Ana", 23);
let p3 = new Pessoa();

console.log(p1.nome);
console.log(p2);

//usando uma classe
class Animal {
    constructor(nome, tutor) {
        this.nome = nome;
        this.tutor = tutor;
    }

    emitirSom(){
        return `${this.nome} faz um som!`;
    }
}

let gato = new Animal("Tom", "Harry");
console.log(gato.emitirSom());

