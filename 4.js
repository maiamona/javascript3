/**
 * utilizando o formulario 'form' e o botão 'Submit'
 */

function meuEscopo() {
    const form = document.querySelector('.form')
    
    // form.onsubmit = function (evento){
    //    evento.preventDefault();
    //    alert(1);
    //    console.log('foi enviado');
    //     };
    
// let contador = 1;
    function recebeEventoForm(evento) {
          evento.preventDefault();
    //    console.log(`foi enviado: ${contador}`);  
    //    contador++;
let pessoa = [];
let enviado2 = document.getElementById('enviado2');
    let nome1 = form.querySelector('.nome').value;
    let sobrenome1 = form.querySelector('.sobrenome').value;
    let peso1 = form.querySelector('.peso').value;
    let altura1 = form.querySelector('.altura').value;

    enviado2.innerHTML += `${nome1}, ${sobrenome1}, ${peso1}, ${altura1}<br>`;

    // function criaPessoa(nome, sobrenome, peso, altura) {
    //     return {
    //          nome,
    //         sobrenome,
    //         peso,
    //         altura
    //     };
    // }

    // pessoa.push(criaPessoa(nome1, sobrenome1, peso1, altura1));
    pessoa.push({
        nome: nome1,
        sobrenome: sobrenome1,
        peso: peso1,
        altura: altura1
    });

    // console.log(nome, sobrenome, peso, altura);
    // console.log(nome.value, sobrenome.value, peso.value, altura.value);
    console.log(pessoa);
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();


function enviar(){
    let enviado = document.getElementById('enviado');
    let nome1 = document.getElementById('nome').value;
    let sobrenome1 = document.getElementById('sobrenome').value;
    let peso1 = document.getElementById('peso').value;
    let altura1 = document.getElementById('altura').value;

    enviado.innerHTML += `${nome1}, ${sobrenome1}, ${peso1}, ${altura1}<br>`;


    function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        peso,
        altura
    };
}
let pessoa = criaPessoa(nome1, sobrenome1, peso1, altura1);
console.log(pessoa);
}