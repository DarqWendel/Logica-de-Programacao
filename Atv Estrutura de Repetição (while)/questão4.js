// Peça para o usuário inserir um número maior que 10.
// Use um loop while para continuar pedindo o número até que o usuário insira um valor válido.

let numeroMaiorQue10 = prompt('Insira um número maior que 10: ');
let number = Number(numeroMaiorQue10);

while (number <= 10) {
    alert('Insira um valor válido');
    let numeroMaiorQue10 = prompt('Insira um número maior que 10: ');
    number = Number(numeroMaiorQue10);
}

alert(`Obrigado! O valor inserido foi: ${number}`);