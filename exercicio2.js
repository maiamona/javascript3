const peso = 84;
const alturaEmCm = 1.80;
let idade;
const nome = "Luiz Otávio";
const sobreNome = "Miranda";
let IMC;
let anoNascimento = 1987;
let anoAtual = 2021;

idade = anoAtual - anoNascimento;

IMC = peso / (alturaEmCm * alturaEmCm);

console.log(nome + ' ' + sobreNome + ' tem ' + idade + ' anos, pesa ' + peso + ' Kg tem ' + alturaEmCm + ' de altura  e seu IMC é de ' + IMC);
console.log(nome + ' ' + sobreNome + ' nasceu em ' + anoNascimento + '.');
console.log(typeof anoAtual, anoAtual);