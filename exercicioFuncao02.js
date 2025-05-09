// faça uma função para determinar se o numero é positivo ou negativo

function verificarSinal(numero) {
  if (numero > 0) {
    return "O número é positivo.";
  } else if (numero < 0) {
    return "O número é negativo.";
  } else {
    return "O número é zero.";
  }
}

// Exemplos de uso:
console.log(verificarSinal(10));   // O número é positivo.

