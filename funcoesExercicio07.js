function verificarEmprestimo(salario, emprestimo) {
  

  if (emprestimo <= (20/100) * salario) {
    console.log(Empréstimo aprovado.");
    
    return "Empréstimo aprovado.";
  } else {
    return "Empréstimo rejeitado.";
  }
}

// Exemplo de uso:
verificarEmprestimo(3000, 500);

