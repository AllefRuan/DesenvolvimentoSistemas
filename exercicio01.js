// Definindo os três números diretamente no código
let num1 = 25;
let num2 = 11;
let num3 = 37;

// Descobrindo o menor número
let menor = num1;

if (num2 < menor) {
  menor = num2;
}

else if (num3 < menor) {
  menor = num3;
}

// Exibindo o menor número no console
console.log("O menor número é:", menor);
