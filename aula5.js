// function saudacao(nome) {
//     console.log(`Bom dia ${nome}`)
// }

// function saudacao(nome) {
//   return `Bom dia ${nome}`
// }

// saudacao('mona');
// const variavel = saudacao('mona');
// console.log(variavel);

// function soma(x = 1, y = 1) {
//     const resultado = x + y;
//     return resultado;
// }
// console.log(soma());

const raiz = function (n) {
    return n ** 0.5;//retorna a raiz quadrada de 'n'
};
const raiz2 = (n)=> { //errow function
    return n ** 0.5;//retorna a raiz quadrada de 'n'
};
const raiz3 = n => n ** 0.5;//retorna a raiz quadrada de 'n'
console.log(raiz(9));//raiz quadrada de '9'
console.log(raiz2(9));//raiz quadrada de '9'
console.log(raiz3(9));//raiz quadrada de '9'
  