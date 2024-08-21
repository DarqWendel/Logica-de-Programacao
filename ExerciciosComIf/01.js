// 1 - Verifique se um número é positivo, negativo ou zero
// Escreva um programa que leia um número e use uma estrutura if para verificar se o número é
// positivo, negativo ou zero. Imprima uma
// mensagem apropriada para cada caso.
// const prompt = require('prompt-sync')();


let numero = prompt('Digite um numero:');
if(numero > 0){
    console.log(`O número ${numero} é Positivo!`);
} else if(numero == 0){
    console.log(`O número é igual a ZERO!`);
} else {
    console.log(`O número ${numero} é Negativo!`);
}