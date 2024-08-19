alert('Bem vindo ao jogo do número secreto');
console.log(alert);

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let numeroEscolhido;

let tentativas = 1;

// While = Enquanto
while (numeroEscolhido != numeroSecreto) {
     numeroEscolhido = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (numeroEscolhido == numeroSecreto) {
        break;
    } else {
        if (numeroEscolhido > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroEscolhido}`)
        } else {
            alert(`O número secreto é maior que ${numeroEscolhido}`)
        }
    }
    tentativas++
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou o número secreto: (${numeroSecreto}) com (${tentativas}) ${palavraTentativa}.`);


// if(tentativas > 1){
//     alert(`Parabéns, você acertou o número secreto: (${numeroSecreto}) com (${tentativas}) tentativas`);
// } else {
//     alert(`Parabéns, você acertou o número secreto: (${numeroSecreto}) com (${tentativas}) tentativa`);
// }


