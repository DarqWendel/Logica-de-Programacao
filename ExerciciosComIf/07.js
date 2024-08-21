// - Calcule o valor de uma expressão matemática simples
// Escreva um programa que leia dois números e um operador (+, -, *, /) e use uma estrutura
// switch para calcular o resultado da operação.
// Imprima o resultado.
// Dica: Utilize os operadores aritméticos em cada caso do switch.


let num1 = prompt('Digite o primeiro número:'),
    number1 = Number(num1),
    num2 = prompt('Digite o segundo número:'),
    number2 = Number(num2),
    operador = prompt('Escolha um Operador +, -, *, /');
    console.log(operador);

    switch(number1, number2, operador){
        case '+' : console.log(`${number1} + ${number2} = ${number1 + number2}`); break;
        case '-' : console.log(`${number1} - ${number2} = ${number1 - number2}`); break;
        case '*' : console.log(`${number1} * ${number2} = ${number1 * number2}`); break;
        case '/' : console.log(`${number1} / ${number2} = ${number1 / number2}`); break;
    }
    

