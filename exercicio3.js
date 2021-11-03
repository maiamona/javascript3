let varA = 'A';//B
let varB = 'B';//C
let varC = 'C';//A

console.log(varA);
console.log(varB);
console.log(varC);
console.log('-------------');

let x;

x = varA;
varA = varB;
varB = varC;
varC = x;
console.log(varA);
console.log(varB);
console.log(varC);
console.log('-------------');

let a1 = 'A';//B
let a2 = 'B';//C
let a3 = 'C';//A
[a1, a2, a3] = [a2, a3, a1];
console.log(a1);
console.log(a2);
console.log(a3);