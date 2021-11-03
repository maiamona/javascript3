/*
Tipos de dados primitivos (valores imutaveis - não mode mudar ou modificar eles) - string, number, undefined, null, bigint, symbol - são valores copiados
Os dados passados por referencia são mutaveis (podem ser mudados) - array, object, function
*/ 

let nome = 'Luiz';
nome[0] = 'R'; // não podemos atribuir 'R' na nome[0] porque a string é imutavel
console.log(nome[0]);

let a = [1, 2, 3];
let b = [...a]; // nesse caso o valor de 'a' foi copiado para 'b' e não passado por referencia
//a = b;//aqui é passado por referencia
console.log(a, b);
b = 'N';
console.log(a, b);

let c = {
    nome: 'mona',
    sobrenome: 'garcia'
}

let d = {...c};//(valores primitivos são copiados)-aqui é copiado
//d = c;//aqui é passado por referencia
console.log(c, d);
c.nome = 'joão';
console.log(c, d);

