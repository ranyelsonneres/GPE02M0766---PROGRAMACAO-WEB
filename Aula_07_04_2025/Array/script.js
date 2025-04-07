let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

let nomes = ["Fulano: 12", "Ciclano: 13"];
console.log(nomes);

let lista = [];
lista[0] = "primeiro";
lista[1] = "segundo";
lista[2] = "terceiro";
console.log(lista);
console.log(lista[2]);


//metodos
numeros.push(6);
console.log(numeros);

numeros.unshift(0);
console.log(numeros);

numeros.splice(1,0,0.5);
console.log(numeros);

numeros.pop();
console.log(numeros);

numeros.shift();
console.log(numeros);

numeros.splice(4,2); //remove mais de um elemento (2) iniciando na posição 4
//numeros.splice(4,1);  remove apenas um elemento na posição 4
console.log(numeros);

console.log(numeros.indexOf(4)); //retornar -1 (não encontrado)
console.log(numeros.indexOf(3));

console.log(numeros.includes(0.5));

for (let i=0; i< numeros.length; i++){
    console.log(`Elemento ${i}: ${numeros[i]}`);
}


for (let numero of numeros){
    console.log(numero);
}

let carros = ["c1", "c2"];
carros.unshift("c0");
console.log(carros);
