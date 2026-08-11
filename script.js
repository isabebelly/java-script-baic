let nome;
let numero1;
let numero2;
let soma;
let subtraçao;
let divvisao;
let multiplicaçao;

function calculadora() {

    nome = prompt("Qual o seu nome?");

    alert("Hello, seja bem vindo " + nome  );

    numero1= Number (prompt (" digite o primeiro numero"));
    numero2 =  Number (prompt (" digite o segundo numero")) ;

    
    soma = numero1 + numero2;
    subtraçao = numero1 - numero2;
    divisao = numero1 / numero2;
    multiplicaçao = numero1 * numero2;


    alert ("resultados: \n soma = " + soma + "\n subtraçao = " + subtraçao + "\n divisao = " + divisao + "\n multiplicaçao = " + multiplicaçao);
}
