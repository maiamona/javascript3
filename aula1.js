let nome = "Maiamona";
let frase = "O rato roeu a roupa do rei da roma."

console.log(nome[4]);
console.log(nome.charAt(6));
console.log(nome.charCodeAt(6));
console.log(nome.concat(' é um pogramador.'));
console.log(nome.indexOf('mona'));
console.log(nome.match(/[a-z]/g));// expresão regular que retorna todas as letras menusculas
// console.log(nome.match(/[a-z]/));
console.log(nome.search(/i/));
console.log(nome.replace('Maiamona', 'Garcia'));
console.log(frase.replace(/r/g, '#'));
console.log(frase.substring(frase.length - 5));
console.log(frase.split(' ', 2));