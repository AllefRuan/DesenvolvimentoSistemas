// Notas do aluno
let nota1 = 60;
let nota2 = 80;
let nota3 = 70;
let nota4 = 80;

let media = (nota1 + nota2 + nota3 + nota4) / 4;


if (media >= 60) {
    console.log("Aluno aprovado! Média: " + media);
} else if (media >= 40 && media < 60) {
    console.log("Aluno em recuperação. Média: " + media);
} else {
    console.log("Aluno reprovado. Média: " + media);
}
