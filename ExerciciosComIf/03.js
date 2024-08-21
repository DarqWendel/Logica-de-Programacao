// 3 - Calcule a média de três números e determine o conceito
// Escreva um programa que leia três notas de um aluno, calcule a média e use uma estrutura
// if/else para determinar o conceito (A, B, C, D, E, F) baseado na média. Imprima o conceito.
// Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.

let notaUm = prompt ('Digite a primeira nota:'),
    nota1 = Number(notaUm);
    notaDois = prompt('Digite a segunda nota:');
    nota2 = Number(notaDois);
    notaTres = prompt('Digite a terceira nota'),
    nota3= Number(notaTres);
    media = parseFloat((nota1 + nota2 + nota3) / 3),
    mediaFormatada = media.toFixed(1);
    console.log( mediaFormatada);

    if(media == 10){
        console.log(`Parabéns, você tirou um A`);
    } else if(media >=8){
        console.log(`Parabéns, você tirou um B`);
    } else if(media >=6){
        console.log(`Parabéns, você tirou um C`);
    } else if(media >=4){
        console.log(`Parabéns, você tirou um D`);
    } else if(media >=1){
        console.log(`Parabéns, você tirou um E`);
    } else {
        console.log(`Parabéns, você tirou um F`);
    }

    