// const array = [1, 2, 3];
// array.push(4);
// array[0] = 'mona';
// console.log(array);

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };
// console.log(pessoa1.nome);

// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome,
//         sobrenome,
//         idade
//     };
// }
// let pessoa = criaPessoa('Mona', 'Garcia', 34);
// console.log(pessoa.nome);

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25,
//     fala(){
//     return `${this.nome} ${this.sobrenome} esta falando oi`
//     }
// };
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala(){
    //    return 'ola mundo'; 
    console.log( `A minha idade atual é ${this.idade}.`);
    },
    incremento(){
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incremento();
pessoa1.fala();
pessoa1.incremento();
pessoa1.fala();
pessoa1.incremento();
pessoa1.fala();