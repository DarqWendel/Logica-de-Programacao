// Verifique o dia da semana
// Escreva um programa que leia um número de 1 a 7 e use uma estrutura switch para imprimir o
// dia da semana correspondente. (1 =
// Domingo, 2 = Segunda-feira, etc.)

let numero = prompt('Digite um número de 1 a 7:');
let number = Number(numero);
switch(number){
    case 1 : console.log(`1. Domingo`); break;
    case 2 : console.log(`2. Segunda-Feira`); break;
    case 3 : console.log(`3. Terça-Feira`); break;
    case 4 : console.log(`4. Quarta-Feira`); break;
    case 5 : console.log(`5. Quinta-Feira`); break;
    case 6 : console.log(`6. Sexta-Feira`); break;
    case 7 : console.log(`7. Sábado`); break;
}

