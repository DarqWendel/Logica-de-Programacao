// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log('Seja bem vindo');

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = 'Dárquio';
console.log(`Olá, ${nome}`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let nome2 = 'Cleiton';
// alert(`Olá, ${nome2}`); // FUNCIONANDO

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

// let resultado = prompt('Qual linguagem de programação você mais gosta');;
// console.log(resultado); // FUNCIONANDO

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

    let valor1 = 2,
        valor2 = 2;
    let resultado = (valor1 + valor2);
    console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);


// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

    let valorUm = 2, 
        valorDois = 2, 
        subtracao = (valorUm - valorDois);
        console.log(`A diferença entre ${valorUm} e ${valorDois} é igual a ${subtracao}`)

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

    const idade = prompt('Qual a sua idade?');
    let se_senao = idade >= 18 ? 'Você é maior de idade' : 'Você é menor de idade';
    console.log(se_senao);

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

    let numero = prompt('Insira um valor:');
    if(numero > 0 ){
        console.log('O número é Positivo!');
    } else if(numero == 0) {
        console.log('O número é igual a zero');
    } else{
        console.log('O número é Negativo!');
    } 

// Use um loop while para imprimir os números de 1 a 10 no console.

    let contador = 1;
    while(contador <=10){
        console.log(contador);
        contador++
    }

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

    let nota = 6;
    let ternario = nota >= 7 ? 'Aprovado' : 'Reprovado';
    console.log(ternario);

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

    let numeroAleatorio = parseInt(Math.random() * 100);
    console.log(numeroAleatorio);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

    let numeroRandom = parseInt(Math.random() * 10 + 1);
    console.log(numeroRandom);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let random = parseInt(Math.random() * 1000 + 1);
console.log(random);
