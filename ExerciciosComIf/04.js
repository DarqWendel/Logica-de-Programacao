// Verifique se um número é par ou ímpar
// Escreva um programa que leia um número e use uma estrutura if/else para verificar se o
// número é par ou ímpar. Imprima uma mensagem apropriada.


let numero = prompt('Digite um numero:');
if(numero % 2 == 0){
    console.log(`O número ${numero} é Par`);
} else {
    console.log(`O número ${numero} é Ímpar`);
}