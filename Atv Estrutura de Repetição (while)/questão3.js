// Use um loop while para calcular a soma de todos os números de 1 a 100.



// Criei uma variável para armazenar o cálculo, como a questão pediu para começar do número 1, eu atribui o valor da variável para 1.
let calcular = 1;

// Então eu entrei na estrutura de repetição while(enquanto), ficando assim: 
// Enquanto calcular for menor ou igual a 100:
while (calcular <=100){
    let resultado = (calcular + calcular); // Criei uma variável para armazenar o resultado, se não tivesse, eu teria só o cálculo sem resultado.
    // A variável resultado, é atribuida ao valor de "calcular + calcular", ou seja, vai puxar o valor da variável "calcular e somar com ela mesma."

    //Dei um console.log para mostrar então o cálculo, "calcular + calcular = resultado" (1 + 1 = 2)

    //calcular = 1
    // resultado =2


    console.log(`${calcular} + ${calcular} = ${resultado}`);
    calcular++; // sempre que o while aprovar a condição, ele vai adicionar mais um, e assim vai repetir o processo, até a condição ser falsa.
    
}
